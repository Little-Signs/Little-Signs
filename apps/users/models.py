from django.contrib.auth import models as base_models
from django.db import models
from django.utils import timezone
from apps.users import managers
from django.core.validators import MinValueValidator
from decimal import Decimal

class User(base_models.AbstractBaseUser, base_models.PermissionsMixin):
    gender_choices = (
        ('Male', 'Male'),
        ('Female', 'Female')
    )
    first_name = models.CharField("first name", max_length=15, null=True)
    last_name = models.CharField("last name", max_length=15, null=True)
    phone_number = models.CharField("phone number", max_length=15, null=True)
    gender = models.CharField("gender", max_length=50, choices=gender_choices, null=True)
    phone_number = models.CharField("phone number", max_length=15, null=True)
    email = models.EmailField(unique=True, null=True, db_index=True)
    date_of_birth = models.DateField("date of birth", null=True)
    city = models.CharField("city", max_length=50, null=True)
    is_active = models.BooleanField(default=False)
    is_organisation = models.BooleanField(default=False)
    is_individual = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    badges = models.ManyToManyField("learn.Badge", verbose_name="Learner badges",related_name="badges",related_query_name="badge")

    REQUIRED_FIELDS = []
    USERNAME_FIELD = "email"

    objects = managers.UserManager()
    # def __str__(self):
    #     return self.first_name
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"

    def get_short_name(self):
        return self.first_name
    
class Organisation(models.Model):
    type_of_org_choice = (
        ('School', 'School'),
        ('Other', 'Other')
    )
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    org_name = models.CharField(max_length=50, null=True)
    org_address =models.CharField(max_length=50, null=True)
    phone_number = models.CharField(max_length=15, null=True)
    type_of_org = models.CharField(max_length=50, choices=type_of_org_choice, null=True)

    def __str__(self):
        return self.org_name
    

class Group(base_models.Group):
    class Meta:
        proxy = True


class SubscriptionPlan(models.Model):
    DURATION_CHOICES = (
        (1, '1 Month'),
        (6, '6 Months'),
        (12, '12 Months'),
    )
    
    PLAN_TYPE_CHOICES = (
        ('individual', 'Individual'),
        ('organization', 'Organization'),
    )
    
    name = models.CharField(max_length=100)
    plan_type = models.CharField(max_length=20, choices=PLAN_TYPE_CHOICES)
    duration = models.PositiveIntegerField(choices=DURATION_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(Decimal('0.01'))])
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    features = models.JSONField(default=list, blank=True)  # List of features included in this plan
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ('plan_type', 'duration')
        ordering = ['plan_type', 'duration']
    
    def __str__(self):
        return f"{self.get_plan_type_display()} - {self.get_duration_display()} - ${self.price}"

class UserSubscription(models.Model):
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE,
        related_name='subscription'
    )
    plan = models.ForeignKey(SubscriptionPlan, on_delete=models.PROTECT)
    start_date = models.DateField()
    end_date = models.DateField()
    is_active = models.BooleanField(default=True)
    auto_renew = models.BooleanField(default=False)
    
    payment_method = models.CharField(max_length=50, blank=True)
    transaction_id = models.CharField(max_length=100, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-is_active', '-end_date']
    
    def __str__(self):
        return f"{self.user.email} - {self.plan.name} ({'Active' if self.is_active else 'Inactive'})"
    
    def save(self, *args, **kwargs):
        # You might want to add logic to handle subscription activation/deactivation
        # based on dates when saving
        super().save(*args, **kwargs)
