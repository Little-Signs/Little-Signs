from django.db import models
from django.contrib.auth import get_user_model
from apps.learning.models import DifficultyLevel
from datetime import date, timedelta

User = get_user_model()


class ParentProfile(models.Model):
    """Parent profile for managing children's accounts"""
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='parental_parent_profile',
        related_query_name='parental_parent_profile'
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
        related_name='parental_managed_by_parents',
        related_query_name='parental_managed_by_parent',
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
        related_name='parental_child_profile',
        related_query_name='parental_child_profile'
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


class ScreenTimeLimit(models.Model):
    """Screen time limits for children"""
    child = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='screen_time_limits'
    )
    
    # Daily limits
    max_daily_minutes = models.PositiveIntegerField(
        help_text="Maximum daily screen time in minutes"
    )
    max_weekly_minutes = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="Maximum weekly screen time in minutes"
    )
    
    # Time restrictions
    allowed_start_time = models.TimeField(
        null=True,
        blank=True,
        help_text="Earliest time child can use the app"
    )
    allowed_end_time = models.TimeField(
        null=True,
        blank=True,
        help_text="Latest time child can use the app"
    )
    
    # Blocked days
    blocked_days = models.JSONField(
        default=list,
        blank=True,
        help_text="Days of week when app is blocked (0=Monday, 6=Sunday)"
    )
    
    # Exceptions
    parent_override_code = models.CharField(
        max_length=10,
        help_text="Code for parents to override time limits"
    )
    
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Screen Time Limit"
        verbose_name_plural = "Screen Time Limits"

    def __str__(self):
        return f"Screen time limits for {self.child.get_full_name() or self.child.email}"


class ProgressReport(models.Model):
    """Progress reports for parents"""
    child = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='progress_reports'
    )
    parent = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='received_reports'
    )
    
    # Report period
    report_date = models.DateTimeField(auto_now_add=True)
    period_start = models.DateField()
    period_end = models.DateField()
    
    # Progress metrics
    total_practice_minutes = models.PositiveIntegerField(default=0)
    lessons_completed = models.PositiveIntegerField(default=0)
    signs_learned = models.PositiveIntegerField(default=0)
    current_streak = models.PositiveIntegerField(default=0)
    accuracy_improvement = models.IntegerField(
        null=True,
        blank=True,
        help_text="Percentage improvement in accuracy"
    )
    
    # Content
    notes = models.TextField(
        blank=True,
        help_text="Additional notes about child's progress"
    )
    achievements = models.JSONField(
        default=list,
        blank=True,
        help_text="List of achievements earned during this period"
    )
    
    # Report status
    is_sent = models.BooleanField(default=False)
    sent_at = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        ordering = ['-report_date']
        indexes = [
            models.Index(fields=['child', '-report_date']),
            models.Index(fields=['parent', '-report_date']),
        ]
        verbose_name = "Progress Report"
        verbose_name_plural = "Progress Reports"

    def __str__(self):
        return f"Progress report for {self.child.get_full_name()} ({self.period_start} to {self.period_end})"
