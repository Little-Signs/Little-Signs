from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from .models import ContactMessage, PitchDeckRequest
from .serializers import ContactMessageSerializer, PitchDeckRequestSerializer
from .services import send_contact_email, send_auto_reply, send_pitch_deck_email


@api_view(['POST'])
@permission_classes([AllowAny])
def contact_submit(request):
    """
    Handle contact form submission
    Sends email to both recipients with reply-to functionality
    """
    try:
        # Validate and save the contact message
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            contact_message = serializer.save()
            
            # Send email to recipients
            email_sent, email_message = send_contact_email(
                name=contact_message.name,
                email=contact_message.email,
                message=contact_message.message
            )
            
            # Send auto-reply to sender
            auto_reply_sent, auto_reply_message = send_auto_reply(
                name=contact_message.name,
                email=contact_message.email
            )
            
            return Response({
                'success': True,
                'message': 'Contact form submitted successfully',
                'email_sent': email_sent,
                'auto_reply_sent': auto_reply_sent,
                'contact_id': contact_message.id
            }, status=status.HTTP_201_CREATED)
        
        return Response({
            'success': False,
            'message': 'Validation failed',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
        
    except Exception as e:
        return Response({
            'success': False,
            'message': 'An error occurred while processing your request',
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def contact_messages(request):
    """
    Get all contact messages (admin only)
    """
    messages = ContactMessage.objects.all()
    serializer = ContactMessageSerializer(messages, many=True)
    return Response(serializer.data)


@api_view(['PATCH'])
def mark_processed(request, message_id):
    """
    Mark a contact message as processed (admin only)
    """
    try:
        message = ContactMessage.objects.get(id=message_id)
        message.is_processed = True
        message.save()
        
        return Response({
            'success': True,
            'message': 'Message marked as processed'
        })
        
    except ContactMessage.DoesNotExist:
        return Response({
            'success': False,
            'message': 'Message not found'
        }, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([AllowAny])
def pitch_deck_request(request):
    """
    Handle pitch deck download request.
    Saves the requester's info and sends them an email with the download link.
    """
    try:
        serializer = PitchDeckRequestSerializer(data=request.data)
        if serializer.is_valid():
            pitch_request = serializer.save()

            email_sent, email_message = send_pitch_deck_email(
                email=pitch_request.email,
                name=pitch_request.name
            )

            return Response({
                'success': True,
                'message': 'A download link has been sent to your email.',
                'email_sent': email_sent,
            }, status=status.HTTP_201_CREATED)

        return Response({
            'success': False,
            'message': 'Validation failed',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        return Response({
            'success': False,
            'message': 'An error occurred while processing your request',
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
