from django.conf import settings
from django.contrib.sitemaps.views import sitemap
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from .sitemaps import CourseSitemap, StaticViewSitemap, OtherStaticViewSitemap

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

sitemaps = {
    "static": StaticViewSitemap,
    "courses": CourseSitemap,
    "other_static": OtherStaticViewSitemap,
}


def trigger_error(request):
    division_by_zero = 1 / 0


urlpatterns = [
    # API URLs
    path('api/v1/', include('apps.api.urls')),
    
    # API Documentation
    path('api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    
    # Admin URLs
    path("admin/", admin.site.urls),
    
    # Legacy URLs (to be removed after migration to API-only)
    path("account/", include("apps.users.urls.auth")),
    path("", include("apps.pages.urls.home")),
    path("sentry-debug/", trigger_error),
    path(
        "sitemap.xml",
        sitemap,
        {"sitemaps": sitemaps},
        name="django.contrib.sitemaps.views.sitemap",
    ),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.USE_DEBUG_TOOLBAR:
    import debug_toolbar

    urlpatterns += (path("__debug__/", include(debug_toolbar.urls)),)


if settings.ENV == "dev":
    # Note: Template error pages removed since using API-only approach
    # API will return JSON error responses instead
    pass
