from django.contrib.auth import models as base_models
from django.db import models
from django.utils import timezone

from apps.users import managers


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
    email = models.EmailField("email", max_length=50, null=True)
    date_of_birth = models.DateField("date of birth", null=True)
    city = models.CharField("city", max_length=50, null=True)
    is_active = models.BooleanField(default=False)
    is_organisation = models.BooleanField(default=False)
    is_individual = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

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
