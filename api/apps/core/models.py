import uuid

from django.db import models


class TimestampedModel(models.Model):
    """Abstract base model with timestamp fields"""
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True


class KeyModel(TimestampedModel):
    """Abstract base model with auto-generated UUID key"""
    key = models.CharField(
        max_length=255, unique=True, db_index=True, null=False, blank=True
    )

    class Meta:
        abstract = True

    @property
    def short_key(self):
        return self.key[:8]

    def save(self, **kwargs):
        if not self.key:
            while True:
                new_key = str(uuid.uuid4())
                try:
                    self.__class__.objects.get(key=new_key)
                    continue
                except self.__class__.DoesNotExist:
                    self.key = new_key
                    break
        super().save(**kwargs)


class SoftDeleteModel(models.Model):
    """Abstract base model for soft delete functionality"""
    is_deleted = models.BooleanField(default=False)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True

    def delete(self, using=None, keep_parents=False):
        """Soft delete the model"""
        from django.utils import timezone
        self.is_deleted = True
        self.deleted_at = timezone.now()
        self.save()

    def hard_delete(self, using=None, keep_parents=False):
        """Actually delete the model from database"""
        super().delete(using=using, keep_parents=keep_parents)

    def restore(self):
        """Restore a soft-deleted model"""
        self.is_deleted = False
        self.deleted_at = None
        self.save()


class BaseModel(TimestampedModel):
    """Base model with common fields for all models"""
    
    class Meta:
        abstract = True


class ActiveModel(BaseModel):
    """Base model with active status"""
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class OrderableModel(BaseModel):
    """Base model with ordering functionality"""
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        abstract = True
        ordering = ['display_order']
