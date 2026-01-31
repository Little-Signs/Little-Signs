from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone
from apps.learning.models import Lesson
import uuid

User = get_user_model()


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
        related_name='progress_enrollments',
        related_query_name='progress_enrollment'
    )
    course = models.ForeignKey(
        'learning.Course', 
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


class PracticeSession(models.Model):
    """Track user practice sessions"""
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='progress_practice_sessions',
        related_query_name='progress_practice_session'
    )
    session_date = models.DateTimeField(auto_now_add=True)
    duration_minutes = models.PositiveIntegerField(
        help_text="Duration of practice session in minutes"
    )
    signs_practiced = models.ManyToManyField(
        'learning.Sign',
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


# Legacy models for backward compatibility
class CourseEnrollment(models.Model):
    """Deprecated: Use Enrollment model instead. Kept for backward compatibility."""
    
    ENROLLMENT_STATUS = (
        ("PENDING", "Pending"),
        ("REVOKED", "Revoked"),
        ("COMPLETED", "Completed"),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='progress_course_enrollments')
    course = models.ForeignKey('learning.Course', on_delete=models.CASCADE, null=True)
    status = models.CharField(
        max_length=10, choices=ENROLLMENT_STATUS, default="PENDING"
    )
    progress = models.IntegerField(default=0)
    last_content_accessed = models.ForeignKey(
        'learning.CourseContent', on_delete=models.CASCADE, null=True
    )
    completed_contents = models.ManyToManyField(
        "learning.CourseContent",
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
