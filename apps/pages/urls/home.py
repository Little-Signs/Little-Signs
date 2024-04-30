from django.urls import include, path
from .v

urlpatterns = [
    path("/", auth_views.LoginView.as_view(), name="home"),
    
]
