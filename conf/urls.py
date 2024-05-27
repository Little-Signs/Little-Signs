from django.conf import settings
from django.contrib.sitemaps.views import sitemap
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from .sitemaps import CoarseSitemap, StaticViewSitemap ,OtherStaticViewSitemap

sitemaps = {
    'static': StaticViewSitemap,
    'study-packs': CoarseSitemap,
    'other_static': OtherStaticViewSitemap
}
def trigger_error(request):
    division_by_zero = 1 / 0
    
urlpatterns = [
    path("account/", include("apps.users.urls.auth")),
    path("learn/", include("apps.learn.urls.learn")),
    path("", include("apps.pages.urls.home")),
    path("admin/", admin.site.urls),
    path('sentry-debug/', trigger_error),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap')
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.USE_DEBUG_TOOLBAR:
    import debug_toolbar

    urlpatterns += (path("__debug__/", include(debug_toolbar.urls)),)


if settings.ENV == "dev":
    urlpatterns += [
        path("error/403/", TemplateView.as_view(template_name="403.html")),
        path("error/404/", TemplateView.as_view(template_name="404.html")),
        path("error/500/", TemplateView.as_view(template_name="500.html")),
    ]
