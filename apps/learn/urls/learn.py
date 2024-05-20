from django.urls import include, path
from apps.learn.views import LearnListView

urlpatterns = [
    path("", LearnListView.as_view(), name="learn"),
    
]