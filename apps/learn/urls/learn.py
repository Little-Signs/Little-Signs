from django.urls import include, path
from apps.learn.views import LearnListView,LearnDetailView

urlpatterns = [
    path("", LearnListView.as_view(), name="learn"),
    path("learning/<int:pk>/", LearnDetailView.as_view(), name="learn_start")
]