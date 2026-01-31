from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# API Documentation
schema_view = get_schema_view(
    openapi.Info(
        title="Little Signs API",
        default_version='v1',
        description="API documentation for Little Signs - Kids Sign Language Learning Platform",
        terms_of_service="https://www.littlesigns.com/terms/",
        contact=openapi.Contact(email="support@littlesigns.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    # API URLs
    path('api/v1/', include('apps.api.urls')),
    
    # API Documentation
    path('api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    
    # Admin URLs
    path('admin/', admin.site.urls),
    
    # App URLs (add your existing app URLs here)
    # path('', include('apps.content.urls')),
    # path('accounts/', include('apps.accounts.urls')),
    # path('learning/', include('apps.learning.urls')),
    # etc.
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
