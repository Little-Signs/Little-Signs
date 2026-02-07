from django.contrib import admin
from .models import ContactMessage, PitchDeckRequest


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at', 'is_processed')
    list_filter = ('is_processed', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)


@admin.register(PitchDeckRequest)
class PitchDeckRequestAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'organisation', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('email', 'name', 'organisation')
    readonly_fields = ('created_at',)
