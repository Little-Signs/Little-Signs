from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from apps.learn.models import Sign, DifficultyLevel
from .serializers import SignSerializer, DifficultyLevelSerializer


class SignDetailAPIView(generics.RetrieveAPIView):
    """Get sign details"""
    queryset = Sign.objects.filter(is_active=True)
    serializer_class = SignSerializer
    permission_classes = []  # Public access


class DifficultyLevelListAPIView(generics.ListCreateAPIView):
    """List difficulty levels or create (admin only)"""
    queryset = DifficultyLevel.objects.filter(is_active=True)
    serializer_class = DifficultyLevelSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminUser()]
        return []  # Public access for GET
