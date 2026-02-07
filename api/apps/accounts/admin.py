from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _

# The User model is now in the users app, so we don't register it here
# from .models import User

# Note: User admin is now handled in apps.users.admin.py
# This file can be used for other accounts-related models if needed
