from django.urls import include, path
from apps.pages import views
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(pattern_name='home', permanent=False)),
    path("home/", views.index, name="home"),
    path("home/coarse/<int:pk>/", views.CoarseDetailView.as_view(), name="coarse-detail"),
    path("about-us/",views.aboutUs, name="about-us"),
    path("contact/", views.contact, name="contact"),
    path("term-of-use/", views.termOfuse, name="term-of-use"),
    path("privacy-policy/",views.privacyPolicy, name="privacy-policy")
]
