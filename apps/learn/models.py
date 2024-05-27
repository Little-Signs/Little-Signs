from django.db import models

# Create your models here.
from django.db import models
from django.urls import reverse
from conf.storage_backend import PublicMediaStorage
from apps.users.models import User

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
    video = models.FileField(storage=PublicMediaStorage(), null=True)
    image = models.ImageField(storage=PublicMediaStorage(), null=True)
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
    progress = models.DecimalField(max_digits=3, decimal_places=3,null=True)
    last_content_accessed = models.ForeignKey(CoarseContent,on_delete=models.CASCADE,null=True),
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.status
    
class Badge(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.ImageField(storage=PublicMediaStorage(), null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Badge"
        verbose_name_plural = "Badges"

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("badge_detail", kwargs={"pk": self.pk})
