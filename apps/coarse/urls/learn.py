from django.urls import include, path
from apps.pages.views import LearnListView

urlpatterns = [
    path("", LearnListView.as_view(), name="home"),
    
]