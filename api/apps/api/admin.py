from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin
from .models import APIKey, APIUsageLog


class APIKeyAdmin(admin.ModelAdmin):
    list_display = ['name', 'key', 'user', 'is_active', 'created_at', 'expires_at']
    list_filter = ['is_active', 'created_at', 'expires_at']
    search_fields = ['name', 'user__email']
    readonly_fields = ['key', 'created_at']
    
    def get_readonly_fields(self, request, obj=None):
        if obj:  # editing existing object
            return self.readonly_fields + ['key']
        return self.readonly_fields


class APIUsageLogAdmin(admin.ModelAdmin):
    list_display = ['user', 'endpoint', 'method', 'status_code', 'timestamp', 'ip_address']
    list_filter = ['method', 'status_code', 'timestamp']
    search_fields = ['user__email', 'endpoint', 'ip_address']
    readonly_fields = ['user', 'endpoint', 'method', 'status_code', 'timestamp', 'ip_address', 'request_data', 'response_data']
    
    def has_add_permission(self, request):
        return False  # Logs are created automatically


# Customize Token Admin
TokenAdmin.list_display = ('user', 'key', 'created_at')
TokenAdmin.list_filter = ('created_at',)
TokenAdmin.search_fields = ('user__email',)


admin.site.register(APIKey, APIKeyAdmin)
admin.site.register(APIUsageLog, APIUsageLogAdmin)
