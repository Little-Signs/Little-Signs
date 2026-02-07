from rest_framework import status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth import login as django_login
from django.db.models import Count, Q, Avg
from django.utils import timezone
from datetime import timedelta
from rest_framework_simplejwt.tokens import RefreshToken
import uuid

from apps.learning.models import Course, Lesson, Sign, SignCategory, DifficultyLevel
from apps.progress.models import Enrollment, PracticeSession
from apps.gamification.models import Badge, UserBadge
from apps.parental.models import ParentProfile, ChildProfile, ProgressReport
from apps.accounts.models import User, Organisation, SubscriptionPlan
from apps.accounts.services import send_verification_email, send_welcome_email, send_password_reset_email

from .serializers import (
    UserSerializer, UserCreateSerializer, CourseSerializer, CourseDetailSerializer,
    LessonSerializer, SignSerializer, SignCategorySerializer, DifficultyLevelSerializer,
    EnrollmentSerializer, PracticeSessionSerializer, BadgeSerializer, UserBadgeSerializer,
    ParentProfileSerializer, ChildProfileSerializer, ProgressReportSerializer,
    OrganisationSerializer, SubscriptionPlanSerializer,
    AdminDashboardSerializer, ParentDashboardSerializer, ChildDashboardSerializer
)
from .additional_views import SignDetailAPIView, DifficultyLevelListAPIView

User = get_user_model()


# Custom Permissions
class IsAdminOrStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user and (request.user.is_staff or request.user.is_superuser)


class IsAdminOrParent(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user and (request.user.is_staff or 
                                hasattr(request.user, 'parent_profile'))


class IsOwnerOrAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.is_staff or request.user.is_superuser:
            return True
        return obj.user == request.user


# Authentication Views
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register(request):
    """Register a new user with enhanced fields and email verification"""
    serializer = UserCreateSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        
        # Send email verification
        try:
            verification_token = user.send_email_verification()
            send_verification_email(user.email, verification_token)
        except Exception as e:
            # Log error but don't fail registration
            print(f"Failed to send verification email: {e}")
        
        return Response({
            'user': UserSerializer(user).data,
            'message': 'Registration successful! Please check your email for verification.',
            'requires_verification': True
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def verify_email(request, token):
    """Verify user email with token"""
    try:
        user = User.objects.get(email_verification_token=token)
        if user.is_email_verified:
            return Response({
                'message': 'Email already verified'
            }, status=status.HTTP_200_OK)
        
        user.is_email_verified = True
        user.email_verification_token = None
        user.is_active = True  # Activate user after email verification
        user.save()
        
        # Send welcome email
        try:
            send_welcome_email(user.email, user.first_name)
        except Exception as e:
            print(f"Failed to send welcome email: {e}")
        
        return Response({
            'message': 'Email verified successfully! You can now log in.'
        }, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({
            'error': 'Invalid verification token'
        }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def resend_verification(request):
    """Resend email verification"""
    email = request.data.get('email')
    try:
        user = User.objects.get(email=email)
        if user.is_email_verified:
            return Response({
                'message': 'Email already verified'
            }, status=status.HTTP_200_OK)
        
        verification_token = user.send_email_verification()
        send_verification_email(user.email, verification_token)
        
        return Response({
            'message': 'Verification email sent successfully'
        }, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({
            'error': 'User not found'
        }, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def custom_login(request):
    """Custom login with email verification check"""
    email = request.data.get('email')
    password = request.data.get('password')
    
    if not email or not password:
        return Response({
            'error': 'Email and password are required'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    # Try to authenticate user using email as username
    try:
        user = User.objects.get(email=email)
        user = authenticate(username=user.email, password=password)
    except User.DoesNotExist:
        user = None
    
    if not user:
        return Response({
            'error': 'Invalid credentials'
        }, status=status.HTTP_401_UNAUTHORIZED)
    
    if not user.is_email_verified:
        return Response({
            'error': 'Please verify your email before logging in. Check your inbox for the verification email.',
            'requires_verification': True,
            'email': user.email
        }, status=status.HTTP_403_FORBIDDEN)
    
    if not user.is_active:
        return Response({
            'error': 'Account is not active'
        }, status=status.HTTP_403_FORBIDDEN)
    
    # Generate JWT tokens
    refresh = RefreshToken.for_user(user)
    
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'user': UserSerializer(user).data
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def profile(request):
    """Get current user profile"""
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


@api_view(['PUT', 'PATCH'])
@permission_classes([permissions.IsAuthenticated])
def update_profile(request):
    """Update current user profile"""
    serializer = UserSerializer(request.user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Learning Views (Public and Authenticated)
class CourseListAPIView(ListCreateAPIView):
    """List all courses (public) or create course (admin only)"""
    queryset = Course.objects.filter(is_published=True)
    serializer_class = CourseSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminOrStaff()]
        return [permissions.AllowAny()]

    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filter by difficulty level
        difficulty = self.request.query_params.get('difficulty')
        if difficulty:
            queryset = queryset.filter(difficulty_level__name=difficulty)
        
        # Filter by age range
        min_age = self.request.query_params.get('min_age')
        max_age = self.request.query_params.get('max_age')
        if min_age:
            queryset = queryset.filter(age_range_min__lte=min_age)
        if max_age:
            queryset = queryset.filter(age_range_max__gte=max_age)
        
        # Filter by featured
        featured = self.request.query_params.get('featured')
        if featured == 'true':
            queryset = queryset.filter(is_featured=True)
        
        return queryset


class CourseDetailAPIView(RetrieveUpdateDestroyAPIView):
    """Get course details, update or delete (admin only)"""
    queryset = Course.objects.all()
    serializer_class = CourseDetailSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [IsAdminOrStaff()]
        return [permissions.AllowAny]


class LessonListAPIView(ListCreateAPIView):
    """List lessons for a course or create lesson (admin only)"""
    serializer_class = LessonSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminOrStaff()]
        return [permissions.AllowAny()]

    def get_queryset(self):
        course_id = self.kwargs.get('course_id')
        return Lesson.objects.filter(course_id=course_id, is_published=True)


class SignListAPIView(ListCreateAPIView):
    """List signs or create sign (admin only)"""
    queryset = Sign.objects.filter(is_active=True)
    serializer_class = SignSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminOrStaff()]
        return [permissions.AllowAny()]

    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filter by category
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__name=category)
        
        # Filter by difficulty
        difficulty = self.request.query_params.get('difficulty')
        if difficulty:
            queryset = queryset.filter(difficulty_level__name=difficulty)
        
        # Search by word
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(word__icontains=search)
        
        return queryset


class SignCategoryListAPIView(ListCreateAPIView):
    """List sign categories or create category (admin only)"""
    queryset = SignCategory.objects.filter(is_active=True)
    serializer_class = SignCategorySerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [IsAdminOrStaff()]
        return [permissions.AllowAny]


# Progress Views (Authenticated)
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def enroll_course(request, course_id):
    """Enroll user in a course"""
    try:
        course = Course.objects.get(id=course_id, is_published=True)
        
        # Check if already enrolled
        if Enrollment.objects.filter(user=request.user, course=course).exists():
            return Response(
                {"error": "Already enrolled in this course"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Check enrollment limits
        if course.max_enrollments:
            current_enrollments = Enrollment.objects.filter(course=course, status='ACTIVE').count()
            if current_enrollments >= course.max_enrollments:
                return Response(
                    {"error": "Course enrollment limit reached"}, 
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        enrollment = Enrollment.objects.create(
            user=request.user,
            course=course,
            status='ACTIVE'
        )
        
        return Response(EnrollmentSerializer(enrollment).data, status=status.HTTP_201_CREATED)
        
    except Course.DoesNotExist:
        return Response({"error": "Course not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def my_enrollments(request):
    """Get user's enrollments"""
    enrollments = Enrollment.objects.filter(user=request.user)
    serializer = EnrollmentSerializer(enrollments, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def complete_lesson(request, enrollment_id, lesson_id):
    """Mark a lesson as completed"""
    try:
        enrollment = Enrollment.objects.get(id=enrollment_id, user=request.user)
        lesson = Lesson.objects.get(id=lesson_id)
        
        enrollment.mark_lesson_completed(lesson)
        
        return Response({"message": "Lesson marked as completed"})
        
    except (Enrollment.DoesNotExist, Lesson.DoesNotExist):
        return Response({"error": "Enrollment or lesson not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_practice_session(request):
    """Create a practice session"""
    serializer = PracticeSessionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def my_practice_sessions(request):
    """Get user's practice sessions"""
    sessions = PracticeSession.objects.filter(user=request.user)
    serializer = PracticeSessionSerializer(sessions, many=True)
    return Response(serializer.data)


# Gamification Views
@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def my_badges(request):
    """Get user's earned badges"""
    user_badges = UserBadge.objects.filter(user=request.user, is_displayed=True)
    serializer = UserBadgeSerializer(user_badges, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def available_badges(request):
    """List all available badges"""
    badges = Badge.objects.filter(is_active=True)
    serializer = BadgeSerializer(badges, many=True)
    return Response(serializer.data)


# Parental Views
@api_view(['GET', 'POST'])
@permission_classes([permissions.IsAuthenticated])
def parent_profile(request):
    """Get or create parent profile"""
    try:
        profile = request.user.parent_profile
    except ParentProfile.DoesNotExist:
        profile = None
    
    if request.method == 'GET':
        if profile:
            serializer = ParentProfileSerializer(profile)
            return Response(serializer.data)
        else:
            return Response({"error": "Parent profile not found"}, status=status.HTTP_404_NOT_FOUND)
    
    elif request.method == 'POST':
        if profile:
            return Response({"error": "Parent profile already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = ParentProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAdminOrParent])
def child_progress(request, child_id):
    """Get child's progress report (parent or admin only)"""
    try:
        child = User.objects.get(id=child_id)
        
        # Check if parent can access this child
        if not request.user.is_staff:
            try:
                parent_profile = request.user.parent_profile
                if child not in parent_profile.managed_children.all():
                    return Response({"error": "Access denied"}, status=status.HTTP_403_FORBIDDEN)
            except ParentProfile.DoesNotExist:
                return Response({"error": "Parent profile not found"}, status=status.HTTP_403_FORBIDDEN)
        
        # Get progress data
        enrollments = Enrollment.objects.filter(user=child)
        recent_sessions = PracticeSession.objects.filter(
            user=child, 
            session_date__gte=timezone.now() - timedelta(days=30)
        )
        earned_badges = UserBadge.objects.filter(user=child)
        
        data = {
            'child': UserSerializer(child).data,
            'enrollments': EnrollmentSerializer(enrollments, many=True).data,
            'recent_sessions': PracticeSessionSerializer(recent_sessions, many=True).data,
            'earned_badges': UserBadgeSerializer(earned_badges, many=True).data,
            'total_practice_time': recent_sessions.aggregate(
                total=Count('duration_minutes')
            )['total'] or 0,
            'current_streak': 0  # TODO: Implement streak calculation
        }
        
        return Response(data)
        
    except User.DoesNotExist:
        return Response({"error": "Child not found"}, status=status.HTTP_404_NOT_FOUND)


# Admin Views
@api_view(['GET'])
@permission_classes([IsAdminOrStaff])
def admin_dashboard(request):
    """Admin dashboard statistics"""
    total_users = User.objects.count()
    active_users = User.objects.filter(is_active=True).count()
    total_courses = Course.objects.count()
    total_enrollments = Enrollment.objects.count()
    completed_enrollments = Enrollment.objects.filter(status='COMPLETED').count()
    total_practice_sessions = PracticeSession.objects.count()
    badges_awarded = UserBadge.objects.count()
    
    # Recent activity
    recent_enrollments = Enrollment.objects.order_by('-enrollment_date')[:10]
    recent_sessions = PracticeSession.objects.order_by('-session_date')[:10]
    
    data = {
        'total_users': total_users,
        'active_users': active_users,
        'total_courses': total_courses,
        'total_enrollments': total_enrollments,
        'completed_enrollments': completed_enrollments,
        'total_practice_sessions': total_practice_sessions,
        'badges_awarded': badges_awarded,
        'recent_enrollments': EnrollmentSerializer(recent_enrollments, many=True).data,
        'recent_sessions': PracticeSessionSerializer(recent_sessions, many=True).data,
    }
    
    return Response(data)


@api_view(['GET'])
@permission_classes([IsAdminOrStaff])
def admin_users(request):
    """Get all users (admin only)"""
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminOrStaff])
def admin_enrollments(request):
    """Get all enrollments (admin only)"""
    enrollments = Enrollment.objects.all()
    serializer = EnrollmentSerializer(enrollments, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminOrStaff])
def award_badge(request):
    """Award a badge to a user (admin only)"""
    user_id = request.data.get('user_id')
    badge_id = request.data.get('badge_id')
    
    try:
        user = User.objects.get(id=user_id)
        badge = Badge.objects.get(id=badge_id)
        
        if badge.award_to_user(user):
            return Response({"message": "Badge awarded successfully"})
        else:
            return Response({"error": "User already has this badge"}, status=status.HTTP_400_BAD_REQUEST)
            
    except (User.DoesNotExist, Badge.DoesNotExist):
        return Response({"error": "User or badge not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def password_reset_request(request):
    """Request password reset email"""
    email = request.data.get('email')
    
    if not email:
        return Response({
            'error': 'Email is required'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        user = User.objects.get(email=email)
        
        # Generate password reset token
        reset_token = str(uuid.uuid4())
        user.password_reset_token = reset_token
        user.password_reset_sent_at = timezone.now()
        user.save()
        
        # Send password reset email
        try:
            send_password_reset_email(user.email, reset_token)
        except Exception as e:
            print(f"Failed to send password reset email: {e}")
            return Response({
                'error': 'Failed to send password reset email. Please try again.'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response({
            'message': 'Password reset email has been sent. Please check your inbox.'
        }, status=status.HTTP_200_OK)
        
    except User.DoesNotExist:
        # Don't reveal if email exists or not for security
        return Response({
            'message': 'If an account with that email exists, a password reset link has been sent.'
        }, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def password_reset_confirm(request):
    """Confirm password reset with token"""
    token = request.data.get('token')
    new_password = request.data.get('new_password')
    confirm_password = request.data.get('confirm_password')
    
    if not token or not new_password or not confirm_password:
        return Response({
            'error': 'Token, new password, and confirm password are required'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    if new_password != confirm_password:
        return Response({
            'error': 'Passwords do not match'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    if len(new_password) < 8:
        return Response({
            'error': 'Password must be at least 8 characters long'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        user = User.objects.get(password_reset_token=token)
        
        # Check if token is expired (24 hours)
        if user.password_reset_sent_at and (timezone.now() - user.password_reset_sent_at).hours > 24:
            return Response({
                'error': 'Password reset token has expired. Please request a new one.'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Reset password
        user.set_password(new_password)
        user.password_reset_token = None
        user.password_reset_sent_at = None
        user.save()
        
        return Response({
            'message': 'Password has been reset successfully. You can now log in with your new password.'
        }, status=status.HTTP_200_OK)
        
    except User.DoesNotExist:
        return Response({
            'error': 'Invalid or expired password reset token'
        }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def verify_reset_token(request, token):
    """Verify if password reset token is valid"""
    try:
        user = User.objects.get(password_reset_token=token)
        
        # Check if token is expired (24 hours)
        if user.password_reset_sent_at and (timezone.now() - user.password_reset_sent_at).hours > 24:
            return Response({
                'error': 'Password reset token has expired. Please request a new one.'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({
            'message': 'Token is valid',
            'email': user.email
        }, status=status.HTTP_200_OK)
        
    except User.DoesNotExist:
        return Response({
            'error': 'Invalid password reset token'
        }, status=status.HTTP_400_BAD_REQUEST)


# Organization Management (Admin only)
class OrganisationListAPIView(ListCreateAPIView):
    """List or create organisations (admin only)"""
    queryset = Organisation.objects.all()
    serializer_class = OrganisationSerializer
    permission_classes = [IsAdminOrStaff]


class SubscriptionPlanListAPIView(ListCreateAPIView):
    """List or create subscription plans (admin only)"""
    queryset = SubscriptionPlan.objects.all()
    serializer_class = SubscriptionPlanSerializer
    permission_classes = [IsAdminOrStaff]
