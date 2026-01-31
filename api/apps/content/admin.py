from django.contrib import admin

from .models import AboutUs, OrganisationMembers, HomePage, Testimonial, FAQ


@admin.register(AboutUs)
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ['mission_statement_preview']
    
    def mission_statement_preview(self, obj):
        return obj.mission_statement[:50] + "..." if len(obj.mission_statement) > 50 else obj.mission_statement


@admin.register(OrganisationMembers)
class OrganisationMembersAdmin(admin.ModelAdmin):
    list_display = ['full_name']
    search_fields = ['full_name']


@admin.register(HomePage)
class HomePageAdmin(admin.ModelAdmin):
    list_display = ['welcome_title']
    search_fields = ['welcome_title']


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['user_name', 'rating']
    list_filter = ['rating']
    search_fields = ['user_name']


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question_preview']
    search_fields = ['question', 'answer']
    
    def question_preview(self, obj):
        return obj.question[:80] + "..." if len(obj.question) > 80 else obj.question
