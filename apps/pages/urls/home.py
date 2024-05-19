from django.urls import include, path
from apps.pages import views

urlpatterns = [
    path("", views.index, name="home"),
    path("about-us/",views.aboutUs, name="about-us"),
    path("contact/", views.contact, name="contact"),
    path("term-of-use/", views.termOfuse, name="term-of-use"),
    path("privacy-policy/",views.privacyPolicy, name="privacy-policy")
]
