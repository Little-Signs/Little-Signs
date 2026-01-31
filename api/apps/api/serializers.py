from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from apps.learning.models import Course, Lesson, Sign, SignCategory, DifficultyLevel
from apps.progress.models import Enrollment, PracticeSession
from apps.gamification.models import Badge, UserBadge
from apps.parental.models import ParentProfile, ChildProfile, ProgressReport
from apps.accounts.models import User, Organisation, SubscriptionPlan

User = get_user_model()


# User Management Serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'date_of_birth', 
                 'gender', 'city', 'is_active', 'date_joined']
        read_only_fields = ['id', 'date_joined', 'is_active']


class UserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'password', 'confirm_password',
                 'date_of_birth', 'gender', 'city']

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError("Passwords don't match")
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        password = validated_data.pop('password')
        user = User.objects.create_user(**validated_data)
        user.set_password(password)
        user.save()
        return user


# Learning Serializers
class DifficultyLevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = DifficultyLevel
        fields = '__all__'


class SignCategorySerializer(serializers.ModelSerializer):
    children = SerializerMethodField()

    class Meta:
        model = SignCategory
        fields = '__all__'

    def get_children(self, obj):
        return SignCategorySerializer(obj.children.filter(is_active=True), many=True).data


class SignSerializer(serializers.ModelSerializer):
    category_name = SerializerMethodField()
    difficulty_name = SerializerMethodField()

    class Meta:
        model = Sign
        fields = '__all__'
        read_only_fields = ['view_count']

    def get_category_name(self, obj):
        return obj.category.name if obj.category else None

    def get_difficulty_name(self, obj):
        return obj.difficulty_level.name if obj.difficulty_level else None


class LessonSerializer(serializers.ModelSerializer):
    signs = SignSerializer(many=True, read_only=True)
    signs_count = SerializerMethodField()

    class Meta:
        model = Lesson
        fields = '__all__'

    def get_signs_count(self, obj):
        return obj.signs.count()


class CourseSerializer(serializers.ModelSerializer):
    difficulty_name = SerializerMethodField()
    lessons_count = SerializerMethodField()
    enrolled_students = SerializerMethodField()

    class Meta:
        model = Course
        fields = '__all__'

    def get_difficulty_name(self, obj):
        return obj.difficulty_level.name if obj.difficulty_level else None

    def get_lessons_count(self, obj):
        return obj.lessons.filter(is_published=True).count()

    def get_enrolled_students(self, obj):
        return obj.enrollments.filter(status='ACTIVE').count()


class CourseDetailSerializer(CourseSerializer):
    lessons = LessonSerializer(many=True, read_only=True)

    class Meta(CourseSerializer.Meta):
        fields = '__all__'


# Progress Serializers
class EnrollmentSerializer(serializers.ModelSerializer):
    course_title = SerializerMethodField()
    user_name = SerializerMethodField()
    progress_percentage_display = SerializerMethodField()

    class Meta:
        model = Enrollment
        fields = '__all__'
        read_only_fields = ['uuid', 'enrollment_date', 'completion_date']

    def get_course_title(self, obj):
        return obj.course.title

    def get_user_name(self, obj):
        return obj.user.get_full_name() or obj.user.email

    def get_progress_percentage_display(self, obj):
        return f"{obj.progress_percentage}%"


class PracticeSessionSerializer(serializers.ModelSerializer):
    signs_practiced_data = SerializerMethodField()
    session_type_display = SerializerMethodField()

    class Meta:
        model = PracticeSession
        fields = '__all__'
        read_only_fields = ['session_date']

    def get_signs_practiced_data(self, obj):
        return SignSerializer(obj.signs_practiced.all(), many=True).data

    def get_session_type_display(self, obj):
        return obj.get_session_type_display()


# Gamification Serializers
class BadgeSerializer(serializers.ModelSerializer):
    badge_type_display = SerializerMethodField()

    class Meta:
        model = Badge
        fields = '__all__'

    def get_badge_type_display(self, obj):
        return obj.get_badge_type_display()


class UserBadgeSerializer(serializers.ModelSerializer):
    badge = BadgeSerializer(read_only=True)
    user_name = SerializerMethodField()

    class Meta:
        model = UserBadge
        fields = '__all__'

    def get_user_name(self, obj):
        return obj.user.get_full_name() or obj.user.email


# Parental Serializers
class ParentProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    managed_children_data = SerializerMethodField()

    class Meta:
        model = ParentProfile
        fields = '__all__'

    def get_managed_children_data(self, obj):
        return UserSerializer(obj.managed_children.all(), many=True).data


class ChildProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    preferred_difficulty = DifficultyLevelSerializer(read_only=True)
    current_streak = SerializerMethodField()

    class Meta:
        model = ChildProfile
        fields = '__all__'

    def get_current_streak(self, obj):
        return obj.get_current_streak()


class ProgressReportSerializer(serializers.ModelSerializer):
    child_name = SerializerMethodField()
    parent_name = SerializerMethodField()

    class Meta:
        model = ProgressReport
        fields = '__all__'

    def get_child_name(self, obj):
        return obj.child.get_full_name() or obj.child.email

    def get_parent_name(self, obj):
        return obj.parent.get_full_name() or obj.parent.email


# Admin-only Serializers
class OrganisationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Organisation
        fields = '__all__'


class SubscriptionPlanSerializer(serializers.ModelSerializer):
    plan_type_display = SerializerMethodField()
    duration_display = SerializerMethodField()

    class Meta:
        model = SubscriptionPlan
        fields = '__all__'

    def get_plan_type_display(self, obj):
        return obj.get_plan_type_display()

    def get_duration_display(self, obj):
        return obj.get_duration_display()


# Dashboard Serializers
class AdminDashboardSerializer(serializers.Serializer):
    total_users = serializers.IntegerField()
    active_users = serializers.IntegerField()
    total_courses = serializers.IntegerField()
    total_enrollments = serializers.IntegerField()
    completed_enrollments = serializers.IntegerField()
    total_practice_sessions = serializers.IntegerField()
    badges_awarded = serializers.IntegerField()


class ParentDashboardSerializer(serializers.Serializer):
    managed_children = serializers.ListField(child=UserSerializer())
    children_progress = serializers.ListField()
    recent_reports = serializers.ListField(child=ProgressReportSerializer())
    screen_time_usage = serializers.DictField()


class ChildDashboardSerializer(serializers.Serializer):
    current_enrollments = serializers.ListField(child=EnrollmentSerializer())
    earned_badges = serializers.ListField(child=UserBadgeSerializer())
    practice_streak = serializers.IntegerField()
    total_practice_time = serializers.IntegerField()
    recent_sessions = serializers.ListField(child=PracticeSessionSerializer())
