from django.db import models
from django.urls import reverse
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from conf import settings

User = get_user_model()


class Badge(models.Model):
    """Achievement badges for student motivation"""
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    icon = models.ImageField(
        storage='conf.storage_backend.PublicMediaStorageLittleSigns()', 
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
