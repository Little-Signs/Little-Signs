from django.contrib import admin
from .models import AboutUs, OrganisationMembers


@admin.register(AboutUs)
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ("mission_statement", "vision_statement")
    search_fields = ("mission_statement", "vision_statement")
    # Add more customization if needed


@admin.register(OrganisationMembers)
class OrganisationMembersAdmin(admin.ModelAdmin):
    list_display = ("full_name", "position", "linked_in")
    search_fields = ("full_name", "position", "linked_in")
    # Add more customization if needed
