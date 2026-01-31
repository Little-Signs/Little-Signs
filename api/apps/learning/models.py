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


# Legacy models for backward compatibility
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
