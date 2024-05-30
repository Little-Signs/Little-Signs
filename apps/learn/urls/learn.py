from django.urls import include, path
from apps.learn.views import LearnListView,LearnDetailView, enroll_user, LoadContentView,ContentDetailView

urlpatterns = [
    path("", LearnListView.as_view(), name="learn"),
    path("learning/<int:pk>/", LearnDetailView.as_view(), name="learn_start"),
    path("learning/enroll_user/",enroll_user, name="enroll-user"),
    path('learning/<int:pk>/load_content/', LoadContentView.as_view(), name='load_content'),
    path('learning/content/<int:pk>/', ContentDetailView.as_view(), name='content_detail'),
]