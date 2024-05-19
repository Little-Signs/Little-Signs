from django.urls import include, path
from apps.learn import views

urlpatterns = [
    path("", views.index, name="learn")
]