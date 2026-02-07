from rest_framework import serializers
from .models import ContactMessage, PitchDeckRequest


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'message']


class PitchDeckRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PitchDeckRequest
        fields = ['email', 'name', 'organisation']
