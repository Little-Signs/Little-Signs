from django.urls import path
from . import views

app_name = 'communication'

urlpatterns = [
    path('contact/', views.contact_submit, name='contact_submit'),
    path('messages/', views.contact_messages, name='contact_messages'),
    path('messages/<int:message_id>/processed/', views.mark_processed, name='mark_processed'),
    path('pitch-deck-request/', views.pitch_deck_request, name='pitch_deck_request'),
]
