from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status
import logging

logger = logging.getLogger(__name__)


def custom_exception_handler(exc, context):
    """
    Custom exception handler for REST API
    """
    # Call REST framework's default exception handler first
    response = exception_handler(exc, context)
    
    # Add custom handling
    if response is not None:
        custom_response_data = {
            'error': True,
            'status_code': response.status_code,
            'message': get_error_message(exc),
            'details': response.data if hasattr(response, 'data') else str(exc),
        }
        
        # Add request info for debugging
        if hasattr(context.get('request'), 'path'):
            custom_response_data['path'] = context['request'].path
            custom_response_data['method'] = context['request'].method
        
        response.data = custom_response_data
        
        # Log the error
        logger.error(
            f"API Error: {exc} | "
            f"Path: {context.get('request', {}).get('path', 'Unknown')} | "
            f"Method: {context.get('request', {}).get('method', 'Unknown')} | "
            f"User: {getattr(context.get('request', {}).user, 'Anonymous')}"
        )
    
    return response


def get_error_message(exc):
    """Get user-friendly error message"""
    error_messages = {
        'AuthenticationFailed': 'Invalid authentication credentials',
        'NotAuthenticated': 'Authentication required',
        'PermissionDenied': 'You do not have permission to perform this action',
        'NotFound': 'The requested resource was not found',
        'ValidationError': 'Invalid data provided',
        'ParseError': 'Invalid request format',
        'Throttled': 'Too many requests. Please try again later.',
        'MethodNotAllowed': 'This method is not allowed for this endpoint',
        'UnsupportedMediaType': 'Unsupported media type',
        'NotAcceptable': 'Could not satisfy the request Accept header',
    }
    
    exc_name = exc.__class__.__name__
    return error_messages.get(exc_name, str(exc))
