from django.db import models

# Create your models here.
from django.db import models
from django.urls import reverse
from conf.storage_backend import PublicMediaStorage,PublicMediaStorageLittleSigns
from apps.users.models import User
from django.core.mail import send_mail
from conf import settings

# Create your models here.
class Coarse(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(storage=PublicMediaStorage(), null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class CoarseContent(models.Model):
    name = models.CharField(max_length=100)
    video = models.FileField(storage=PublicMediaStorageLittleSigns(), null=True)
    image = models.ImageField(storage=PublicMediaStorageLittleSigns(), null=True)
    coarse = models.ForeignKey(Coarse,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class CoarseEnrollment(models.Model):

    ENROLLMENT_STATUS = (
        ('PENDING', 'Pending'),
        ('REVOKED', 'Revoked'),
        ('COMPLETED', 'Completed')
    )
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    coarse = models.ForeignKey(Coarse,on_delete=models.CASCADE,null=True)
    status = models.CharField(max_length=10,choices=ENROLLMENT_STATUS,default='PENDING')
    progress = models.IntegerField(default=0)
    last_content_accessed = models.ForeignKey(CoarseContent,on_delete=models.CASCADE,null=True),
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.status
    
    @staticmethod
    def is_user_enrolled(user, coarse):
        return CoarseEnrollment.objects.filter(user=user, coarse=coarse).exists()
    
class Badge(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.ImageField(storage=PublicMediaStorageLittleSigns(), null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Badge"
        verbose_name_plural = "Badges"

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("badge_detail", kwargs={"pk": self.pk})

    def award_to_user(self, user):
        if not user.badges.filter(pk=self.pk).exists():
            user.badges.add(self)
            self.send_award_email(user)

    def send_award_email(self, user):
        subject = f"Congratulations! You've earned a new badge: {self.name}"
        message = f"Dear {user.first_name},\n\n" \
                  f"Congratulations! You've earned the '{self.name}' badge.\n\n" \
                  f"Description: {self.description}\n\n" \
                  f"Keep up the great work!\n\n" \
                  f"Best regards,\n" \
                  f"The Team"
        from_email = settings.EMAIL_HOST_USER
        recipient_list = [user.email]
        send_mail(subject, message, from_email, recipient_list)