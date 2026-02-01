import requests
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_http_methods
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

@require_http_methods(["GET"])
def proxy_image(request):
    """
    Proxy endpoint to serve external images and bypass hotlink protection
    """
    image_url = request.GET.get('url')
    
    if not image_url:
        return JsonResponse({'error': 'URL parameter is required'}, status=400)
    
    # Security: Only allow specific domains
    allowed_domains = ['storage.littlesigns.co.zw', 'littlesigns.co.zw']
    
    try:
        # Validate URL
        from urllib.parse import urlparse
        parsed = urlparse(image_url)
        
        if not any(domain in parsed.netloc for domain in allowed_domains):
            return JsonResponse({'error': 'Domain not allowed'}, status=403)
        
        # Fetch the image
        response = requests.get(
            image_url,
            timeout=10,
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://littlesigns.co.zw/'
            }
        )
        
        if response.status_code == 200:
            # Return the image with proper headers
            image_response = HttpResponse(
                response.content,
                content_type=response.headers.get('content-type', 'image/jpeg')
            )
            image_response['Cache-Control'] = 'public, max-age=3600'  # Cache for 1 hour
            image_response['Access-Control-Allow-Origin'] = '*'
            return image_response
        else:
            logger.error(f"Failed to fetch image: {response.status_code} - {image_url}")
            return JsonResponse({'error': f'Failed to fetch image: {response.status_code}'}, status=response.status_code)
            
    except requests.exceptions.RequestException as e:
        logger.error(f"Request error: {str(e)}")
        return JsonResponse({'error': 'Failed to fetch image'}, status=500)
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return JsonResponse({'error': 'Internal server error'}, status=500)
