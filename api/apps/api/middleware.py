import time
import json
from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse
from django.core.cache import cache
from django.conf import settings
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import APIUsageLog


class APILoggingMiddleware(MiddlewareMixin):
    """Log API requests and responses"""
    
    def process_request(self, request):
        request.start_time = time.time()
        return None
    
    def process_response(self, request, response):
        # Only log API requests
        if not request.path.startswith('/api/'):
            return response
        
        try:
            # Get user from JWT token
            user = None
            jwt_auth = JWTAuthentication()
            try:
                auth_result = jwt_auth.authenticate(request)
                if auth_result:
                    user = auth_result[0]
            except:
                pass
            
            # Calculate response time
            response_time = None
            if hasattr(request, 'start_time'):
                response_time = int((time.time() - request.start_time) * 1000)
            
            # Log the request
            log_data = {
                'user': user,
                'endpoint': request.path,
                'method': request.method,
                'status_code': response.status_code,
                'ip_address': self.get_client_ip(request),
                'user_agent': request.META.get('HTTP_USER_AGENT', ''),
                'response_time_ms': response_time,
            }
            
            # Add request/response data for debugging (limit size)
            if settings.DEBUG:
                try:
                    if hasattr(request, 'body'):
                        log_data['request_data'] = json.loads(request.body.decode('utf-8'))[:1000]
                    if hasattr(response, 'content'):
                        log_data['response_data'] = json.loads(response.content.decode('utf-8'))[:1000]
                except:
                    pass
            
            APIUsageLog.objects.create(**log_data)
            
        except Exception as e:
            # Don't let logging errors break the API
            print(f"API logging error: {e}")
        
        return response
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip


class APIRateLimitMiddleware(MiddlewareMixin):
    """Rate limiting for API endpoints"""
    
    def process_request(self, request):
        if not request.path.startswith('/api/'):
            return None
        
        # Get user
        user = None
        jwt_auth = JWTAuthentication()
        try:
            auth_result = jwt_auth.authenticate(request)
            if auth_result:
                user = auth_result[0]
        except:
            pass
        
        # Get IP address
        ip_address = self.get_client_ip(request)
        
        # Rate limiting rules
        rate_limits = getattr(settings, 'API_RATE_LIMITS', {
            'default': ('1000', 'hour'),  # 1000 requests per hour
            'auth': ('5', 'minute'),      # 5 auth requests per minute
            'admin': ('5000', 'hour'),    # 5000 requests per hour for admins
        })
        
        # Determine which limit to apply
        if request.path.startswith('/api/auth/'):
            limit_key, limit_period = rate_limits.get('auth', rate_limits['default'])
        elif user and (user.is_staff or user.is_superuser):
            limit_key, limit_period = rate_limits.get('admin', rate_limits['default'])
        else:
            limit_key, limit_period = rate_limits['default']
        
        # Create cache key
        cache_key = f"rate_limit:{ip_address}:{request.path}:{limit_period}"
        if user:
            cache_key = f"rate_limit:user:{user.id}:{request.path}:{limit_period}"
        
        # Check current count
        current_count = cache.get(cache_key, 0)
        
        if current_count >= int(limit_key):
            return JsonResponse({
                'error': 'Rate limit exceeded',
                'message': f'Too many requests. Limit: {limit_key} per {limit_period}',
                'retry_after': self.get_retry_after(cache_key, limit_period)
            }, status=429)
        
        # Increment counter
        cache.set(cache_key, current_count + 1, self.get_cache_timeout(limit_period))
        
        return None
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip
    
    def get_cache_timeout(self, period):
        """Convert period to cache timeout in seconds"""
        period_map = {
            'minute': 60,
            'hour': 3600,
            'day': 86400,
        }
        return period_map.get(period, 3600)
    
    def get_retry_after(self, cache_key, period):
        """Calculate retry after time in seconds"""
        timeout = self.get_cache_timeout(period)
        ttl = cache.ttl(cache_key)
        if ttl > 0:
            return ttl
        return timeout


class APISecurityMiddleware(MiddlewareMixin):
    """Security headers for API responses"""
    
    def process_response(self, request, response):
        if request.path.startswith('/api/'):
            # Add security headers
            response['X-Content-Type-Options'] = 'nosniff'
            response['X-Frame-Options'] = 'DENY'
            response['X-XSS-Protection'] = '1; mode=block'
            
            # CORS headers (configure as needed)
            response['Access-Control-Allow-Origin'] = getattr(settings, 'API_CORS_ORIGIN', '*')
            response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
            response['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
            response['Access-Control-Max-Age'] = '86400'
        
        return response
