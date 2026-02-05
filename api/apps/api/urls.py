from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views
from .additional_views import SignDetailAPIView, DifficultyLevelListAPIView
from . import proxy_views

# Create router for ViewSets
router = DefaultRouter()

# API URL patterns
urlpatterns = [
    # Authentication
    path('auth/register/', views.register, name='api_register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='api_login'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='api_refresh'),
    path('auth/profile/', views.profile, name='api_profile'),
    path('auth/profile/update/', views.update_profile, name='api_update_profile'),
    
    # Learning (Public and Authenticated)
    path('courses/', views.CourseListAPIView.as_view(), name='api_courses'),
    path('courses/<int:pk>/', views.CourseDetailAPIView.as_view(), name='api_course_detail'),
    path('courses/<int:course_id>/lessons/', views.LessonListAPIView.as_view(), name='api_course_lessons'),
    path('signs/', views.SignListAPIView.as_view(), name='api_signs'),
    path('signs/<int:pk>/', SignDetailAPIView.as_view(), name='api_sign_detail'),
    path('sign-categories/', views.SignCategoryListAPIView.as_view(), name='api_sign_categories'),
    path('difficulty-levels/', DifficultyLevelListAPIView.as_view(), name='api_difficulty_levels'),
    
    # Image Proxy
    path('proxy-image/', proxy_views.proxy_image, name='api_proxy_image'),
    
    # Progress (Authenticated)
    path('enrollments/', views.my_enrollments, name='api_my_enrollments'),
    path('courses/<int:course_id>/enroll/', views.enroll_course, name='api_enroll_course'),
    path('enrollments/<int:enrollment_id>/lessons/<int:lesson_id>/complete/', 
         views.complete_lesson, name='api_complete_lesson'),
    path('practice-sessions/', views.my_practice_sessions, name='api_my_practice_sessions'),
    path('practice-sessions/create/', views.create_practice_session, name='api_create_practice_session'),
    
    # Gamification
    path('badges/my/', views.my_badges, name='api_my_badges'),
    path('badges/', views.available_badges, name='api_available_badges'),
    
    # Parental Controls
    path('parent/profile/', views.parent_profile, name='api_parent_profile'),
    path('parent/children/<int:child_id>/progress/', views.child_progress, name='api_child_progress'),
    
    # Admin Only
    path('admin/dashboard/', views.admin_dashboard, name='api_admin_dashboard'),
    path('admin/users/', views.admin_users, name='api_admin_users'),
    path('admin/enrollments/', views.admin_enrollments, name='api_admin_enrollments'),
    path('admin/badges/award/', views.award_badge, name='api_award_badge'),
    
    # Organization Management (Admin only)
    path('admin/organisations/', views.OrganisationListAPIView.as_view(), name='api_organisations'),
    path('admin/subscription-plans/', views.SubscriptionPlanListAPIView.as_view(), name='api_subscription_plans'),
    
    # Communication
    path('communication/', include('apps.communication.urls')),
    
    # Router URLs (for ViewSets if added later)
    path('', include(router.urls)),
]

# API Documentation URLs
urlpatterns += [
    path('auth/', include('rest_framework.urls')),
]
