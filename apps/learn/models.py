from django.db import models
from django.urls import reverse
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model
from django.utils import timezone
from conf.storage_backend import PublicMediaStorage, PublicMediaStorageLittleSigns
from django.core.mail import send_mail
from conf import settings
import uuid

User = get_user_model()
class DifficultyLevel(models.Model):
    """Model for course difficulty levels appropriate for children"""
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    age_range_min = models.PositiveIntegerField(
        help_text="Minimum recommended age"
    )
    age_range_max = models.PositiveIntegerField(
        help_text="Maximum recommended age"
    )
    level_order = models.PositiveIntegerField(default=0)
    color_code = models.CharField(
        max_length=7, 
        default="#FF6B6B",
        help_text="Hex color code for UI"
    )
    icon = models.ImageField(
        storage=PublicMediaStorage(), 
        null=True, 
        blank=True,
        help_text="Icon representing difficulty level"
    )
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['level_order']
        verbose_name = "Difficulty Level"
        verbose_name_plural = "Difficulty Levels"

    def __str__(self):
        return f"{self.name} (Ages {self.age_range_min}-{self.age_range_max})"


class SignCategory(models.Model):
    """Categories for organizing signs (e.g., Animals, Colors, Family)"""
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    icon = models.ImageField(
        storage=PublicMediaStorage(), 
        null=True, 
        blank=True
    )
    parent = models.ForeignKey(
        'self', 
        on_delete=models.CASCADE, 
        null=True, 
        blank=True,
        related_name='children'
    )
    display_order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', 'name']
        verbose_name = "Sign Category"
        verbose_name_plural = "Sign Categories"

    def __str__(self):
        return self.name


class Sign(models.Model):
    """Individual sign with video and image demonstrations"""
    word = models.CharField(max_length=100, unique=True)
    description = models.TextField(
        help_text="Description of how to perform the sign"
    )
    category = models.ForeignKey(
        SignCategory, 
        on_delete=models.SET_NULL, 
        null=True,
        related_name='signs'
    )
    difficulty_level = models.ForeignKey(
        DifficultyLevel,
        on_delete=models.SET_NULL,
        null=True,
        related_name='signs'
    )
    
    # Media files
    video_demo = models.FileField(
        storage=PublicMediaStorageLittleSigns(),
        help_text="Video demonstration of the sign"
    )
    image_demo = models.ImageField(
        storage=PublicMediaStorageLittleSigns(),
        null=True,
        blank=True,
        help_text="Static image showing the sign"
    )
    thumbnail = models.ImageField(
        storage=PublicMediaStorageLittleSigns(),
        null=True,
        blank=True,
        help_text="Thumbnail for quick preview"
    )
    
    # Metadata
    tags = models.JSONField(
        default=list,
        blank=True,
        help_text="Tags for search and filtering"
    )
    view_count = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['word']
        indexes = [
            models.Index(fields=['word']),
            models.Index(fields=['category']),
            models.Index(fields=['difficulty_level']),
        ]

    def __str__(self):
        return self.word

    def increment_view_count(self):
        self.view_count += 1
        self.save(update_fields=['view_count'])


class Course(models.Model):
    """Learning courses for children"""
    uuid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    description = models.TextField()
    short_description = models.CharField(
        max_length=500,
        help_text="Brief description for course cards"
    )
    
    # Target audience
    difficulty_level = models.ForeignKey(
        DifficultyLevel,
        on_delete=models.PROTECT,
        related_name='courses'
    )
    age_range_min = models.PositiveIntegerField()
    age_range_max = models.PositiveIntegerField()
    
    # Media
    cover_image = models.ImageField(
        storage=PublicMediaStorage(),
        help_text="Course cover image"
    )
    preview_video = models.FileField(
        storage=PublicMediaStorageLittleSigns(),
        null=True,
        blank=True,
        help_text="Preview video for the course"
    )
    
    # Course settings
    estimated_duration_minutes = models.PositiveIntegerField(
        help_text="Estimated time to complete in minutes"
    )
    max_enrollments = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="Maximum number of students, null for unlimited"
    )
    is_free = models.BooleanField(default=True)
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
        validators=[MinValueValidator(0)]
    )
    
    # Status
    is_published = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    display_order = models.PositiveIntegerField(default=0)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ['-is_featured', 'display_order', 'title']
        indexes = [
            models.Index(fields=['slug']),
            models.Index(fields=['difficulty_level']),
            models.Index(fields=['is_published']),
            models.Index(fields=['is_featured']),
        ]
        verbose_name = "Course"
        verbose_name_plural = "Courses"

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('course_detail', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        if self.is_published and not self.published_at:
            self.published_at = timezone.now()
        super().save(*args, **kwargs)


class Lesson(models.Model):
    """Individual lessons within a course"""
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name='lessons'
    )
    title = models.CharField(max_length=200)
    description = models.TextField()
    
    # Lesson content
    video_content = models.FileField(
        storage=PublicMediaStorageLittleSigns(),
        null=True,
        blank=True,
        help_text="Main video content for the lesson"
    )
    image_content = models.ImageField(
        storage=PublicMediaStorageLittleSigns(),
        null=True,
        blank=True,
        help_text="Main image content for the lesson"
    )
    
    # Lesson settings
    order = models.PositiveIntegerField(
        default=0,
        help_text="Order of lesson within the course"
    )
    duration_minutes = models.PositiveIntegerField(
        default=0,
        help_text="Estimated duration in minutes"
    )
    is_free = models.BooleanField(
        default=False,
        help_text="Whether this lesson is available for free preview"
    )
    
    # Signs taught in this lesson
    signs = models.ManyToManyField(
        Sign,
        related_name='lessons',
        blank=True,
        help_text="Signs taught in this lesson"
    )
    
    # Status
    is_published = models.BooleanField(default=False)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['course', 'order']
        unique_together = ['course', 'order']
        indexes = [
            models.Index(fields=['course', 'order']),
        ]
        verbose_name = "Lesson"
        verbose_name_plural = "Lessons"

    def __str__(self):
        return f"{self.course.title} - {self.title}"


class CourseContent(models.Model):
    """Deprecated: Use Lesson model instead. Kept for backward compatibility."""
    name = models.CharField(max_length=100)
    video = models.FileField(storage=PublicMediaStorageLittleSigns(), null=True)
    image = models.ImageField(storage=PublicMediaStorageLittleSigns(), null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Legacy Course Content"
        verbose_name_plural = "Legacy Course Contents"

    def __str__(self):
        return self.name


class Enrollment(models.Model):
    """Student enrollment in courses"""
    
    ENROLLMENT_STATUS = (
        ("PENDING", "Pending"),
        ("ACTIVE", "Active"),
        ("SUSPENDED", "Suspended"),
        ("COMPLETED", "Completed"),
        ("CANCELLED", "Cancelled"),
    )
    
    uuid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='enrollments'
    )
    course = models.ForeignKey(
        Course, 
        on_delete=models.CASCADE, 
        related_name='enrollments'
    )
    status = models.CharField(
        max_length=20, 
        choices=ENROLLMENT_STATUS, 
        default="PENDING"
    )
    
    # Progress tracking
    progress_percentage = models.IntegerField(
        default=0,
        validators=[MinValueValidator(0), MaxValueValidator(100)]
    )
    last_lesson_accessed = models.ForeignKey(
        Lesson, 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=True,
        related_name='last_accessed_by'
    )
    completed_lessons = models.ManyToManyField(
        Lesson,
        verbose_name="Completed lessons",
        related_name="completed_by",
        blank=True
    )
    
    # Enrollment details
    enrollment_date = models.DateTimeField(auto_now_add=True)
    completion_date = models.DateTimeField(null=True, blank=True)
    last_access_date = models.DateTimeField(null=True, blank=True)
    
    # Certificate
    certificate_issued = models.BooleanField(default=False)
    certificate_date = models.DateTimeField(null=True, blank=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ['user', 'course']
        indexes = [
            models.Index(fields=['user', 'status']),
            models.Index(fields=['course', 'status']),
        ]
        verbose_name = "Enrollment"
        verbose_name_plural = "Enrollments"

    def __str__(self):
        return f"{self.user.email} - {self.course.title} ({self.status})"

    def update_progress(self):
        """Update progress percentage based on completed lessons"""
        total_lessons = self.course.lessons.filter(is_published=True).count()
        if total_lessons > 0:
            completed_count = self.completed_lessons.count()
            self.progress_percentage = int((completed_count / total_lessons) * 100)
            
            # Check if course is completed
            if self.progress_percentage == 100 and self.status != 'COMPLETED':
                self.status = 'COMPLETED'
                self.completion_date = timezone.now()
        else:
            self.progress_percentage = 0
        
        self.save(update_fields=['progress_percentage', 'status', 'completion_date'])

    def mark_lesson_completed(self, lesson):
        """Mark a lesson as completed and update progress"""
        if lesson not in self.completed_lessons.all():
            self.completed_lessons.add(lesson)
            self.last_lesson_accessed = lesson
            self.last_access_date = timezone.now()
            self.update_progress()

    @staticmethod
    def is_user_enrolled(user, course):
        return Enrollment.objects.filter(user=user, course=course).exists()


class CourseEnrollment(models.Model):
    """Deprecated: Use Enrollment model instead. Kept for backward compatibility."""
    
    ENROLLMENT_STATUS = (
        ("PENDING", "Pending"),
        ("REVOKED", "Revoked"),
        ("COMPLETED", "Completed"),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)
    status = models.CharField(
        max_length=10, choices=ENROLLMENT_STATUS, default="PENDING"
    )
    progress = models.IntegerField(default=0)
    last_content_accessed = models.ForeignKey(
        CourseContent, on_delete=models.CASCADE, null=True
    )
    completed_contents = models.ManyToManyField(
        "learn.CourseContent",
        verbose_name="Course Contents completed",
        related_name="course_contents",
        related_query_name="course_content",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Legacy Course Enrollment"
        verbose_name_plural = "Legacy Course Enrollments"

    def __str__(self):
        return self.status

    @staticmethod
    def is_user_enrolled(user, course):
        return CourseEnrollment.objects.filter(user=user, course=course).exists()


class Badge(models.Model):
    """Achievement badges for student motivation"""
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    icon = models.ImageField(
        storage=PublicMediaStorageLittleSigns(), 
        null=True,
        help_text="Badge icon image"
    )
    
    # Badge criteria
    badge_type = models.CharField(
        max_length=20,
        choices=[
            ('COURSE_COMPLETION', 'Course Completion'),
            ('SIGN_MASTER', 'Sign Master'),
            ('STREAK', 'Learning Streak'),
            ('PARTICIPATION', 'Participation'),
            ('SPECIAL', 'Special Achievement'),
        ],
        default='SPECIAL'
    )
    points_required = models.PositiveIntegerField(
        default=0,
        help_text="Points required to earn this badge"
    )
    
    # Badge settings
    is_active = models.BooleanField(default=True)
    is_secret = models.BooleanField(
        default=False,
        help_text="Whether this badge is hidden until earned"
    )
    display_order = models.PositiveIntegerField(default=0)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order', 'name']
        verbose_name = "Badge"
        verbose_name_plural = "Badges"
        indexes = [
            models.Index(fields=['badge_type']),
            models.Index(fields=['is_active']),
        ]

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("badge_detail", kwargs={"pk": self.pk})

    def award_to_user(self, user):
        """Award this badge to a user"""
        if not user.badges.filter(pk=self.pk).exists():
            user.badges.add(self)
            UserBadge.objects.create(user=user, badge=self)
            self.send_award_email(user)
            return True
        return False

    def send_award_email(self, user):
        """Send email notification for badge award"""
        if not user.email:
            return
            
        subject = f"🎉 Congratulations! You've earned a new badge: {self.name}"
        message = (
            f"Dear {user.first_name or 'Little Learner'},\n\n"
            f"Congratulations! You've earned the '{self.name}' badge!\n\n"
            f"🏆 {self.description}\n\n"
            f"Keep up the great work on your sign language journey!\n\n"
            f"Best regards,\n"
            f"The Little Signs Team"
        )
        
        try:
            from_email = settings.EMAIL_HOST_USER
            recipient_list = [user.email]
            send_mail(subject, message, from_email, recipient_list)
        except Exception as e:
            # Log error but don't fail the badge award
            print(f"Failed to send badge email: {e}")


class UserBadge(models.Model):
    """Intermediate model for user-badge relationships with metadata"""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='user_badges'
    )
    badge = models.ForeignKey(
        Badge,
        on_delete=models.CASCADE,
        related_name='user_badges'
    )
    earned_at = models.DateTimeField(auto_now_add=True)
    is_displayed = models.BooleanField(
        default=True,
        help_text="Whether to display this badge on user profile"
    )
    
    class Meta:
        unique_together = ['user', 'badge']
        ordering = ['-earned_at']
        indexes = [
            models.Index(fields=['user', '-earned_at']),
        ]
        verbose_name = "User Badge"
        verbose_name_plural = "User Badges"

    def __str__(self):
        return f"{self.user.email} - {self.badge.name}"


class PracticeSession(models.Model):
    """Track user practice sessions"""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='practice_sessions'
    )
    session_date = models.DateTimeField(auto_now_add=True)
    duration_minutes = models.PositiveIntegerField(
        help_text="Duration of practice session in minutes"
    )
    signs_practiced = models.ManyToManyField(
        Sign,
        related_name='practice_sessions',
        blank=True
    )
    
    # Session metrics
    signs_learned = models.PositiveIntegerField(default=0)
    signs_reviewed = models.PositiveIntegerField(default=0)
    accuracy_score = models.IntegerField(
        null=True,
        blank=True,
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        help_text="Accuracy percentage for this session"
    )
    
    # Session type
    session_type = models.CharField(
        max_length=20,
        choices=[
            ('LESSON', 'Lesson Practice'),
            ('REVIEW', 'Review Session'),
            ('FREE', 'Free Practice'),
            ('QUIZ', 'Quiz Practice'),
        ],
        default='FREE'
    )
    
    class Meta:
        ordering = ['-session_date']
        indexes = [
            models.Index(fields=['user', '-session_date']),
            models.Index(fields=['session_type']),
        ]
        verbose_name = "Practice Session"
        verbose_name_plural = "Practice Sessions"

    def __str__(self):
        return f"{self.user.email} - {self.session_date.strftime('%Y-%m-%d %H:%M')}"


class ParentProfile(models.Model):
    """Parent profile for managing children's accounts"""
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='parent_profile'
    )
    
    # Parent information
    relationship_to_child = models.CharField(
        max_length=50,
        choices=[
            ('PARENT', 'Parent'),
            ('GUARDIAN', 'Guardian'),
            ('TEACHER', 'Teacher'),
            ('THERAPIST', 'Therapist'),
        ]
    )
    
    # Settings
    email_notifications = models.BooleanField(default=True)
    progress_reports = models.BooleanField(default=True)
    weekly_summary = models.BooleanField(default=True)
    
    # Children managed by this parent
    managed_children = models.ManyToManyField(
        User,
        related_name='managed_by_parents',
        blank=True,
        help_text="Children accounts managed by this parent"
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Parent Profile"
        verbose_name_plural = "Parent Profiles"

    def __str__(self):
        return f"Parent: {self.user.get_full_name() or self.user.email}"


class ChildProfile(models.Model):
    """Child-specific profile information"""
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='child_profile'
    )
    
    # Child information
    preferred_name = models.CharField(
        max_length=50,
        help_text="Name the child prefers to be called"
    )
    interests = models.JSONField(
        default=list,
        blank=True,
        help_text="Child's interests for personalized content"
    )
    learning_goals = models.TextField(
        blank=True,
        help_text="Specific learning goals for this child"
    )
    
    # Learning preferences
    preferred_difficulty = models.ForeignKey(
        DifficultyLevel,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='preferred_by_children'
    )
    daily_practice_goal_minutes = models.PositiveIntegerField(
        default=15,
        help_text="Daily practice goal in minutes"
    )
    
    # Accessibility settings
    needs_captions = models.BooleanField(default=False)
    larger_text = models.BooleanField(default=False)
    slower_pace = models.BooleanField(default=False)
    
    # Parental controls
    parent_approval_required = models.BooleanField(default=True)
    max_daily_minutes = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="Maximum daily screen time in minutes"
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Child Profile"
        verbose_name_plural = "Child Profiles"

    def __str__(self):
        return f"Child: {self.preferred_name or self.user.first_name}"

    def get_current_streak(self):
        """Calculate current learning streak in days"""
        from datetime import date, timedelta
        
        today = date.today()
        sessions = self.user.practice_sessions.filter(
            session_date__date__gte=today - timedelta(days=30)
        ).order_by('-session_date')
        
        if not sessions.exists():
            return 0
            
        streak = 0
        current_date = today
        
        for session in sessions:
            if session.session_date.date() == current_date:
                streak += 1
                current_date -= timedelta(days=1)
            elif session.session_date.date() == current_date - timedelta(days=1):
                # Allow for missed days
                current_date -= timedelta(days=1)
            else:
                break
                
        return streak
