from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.admin import GroupAdmin as BaseGroupAdmin
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from .models import Organisation, SubscriptionPlan, UserSubscription, User

from unfold.forms import AdminPasswordChangeForm, UserChangeForm, UserCreationForm
from unfold.admin import ModelAdmin


# admin.site.unregister(User)
# admin.site.unregister(Group)


class UserAdmin(BaseUserAdmin, ModelAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm

    list_display = (
        "email",
        "first_name",
        "last_name",
        "is_staff",
        "is_active",
        "is_organisation",
        "is_individual",
    )
    list_filter = ("is_staff", "is_active", "is_organisation", "is_individual")
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (
            "Personal info",
            {
                "fields": (
                    "first_name",
                    "last_name",
                    "phone_number",
                    "gender",
                    "date_of_birth",
                    "city",
                )
            },
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        ("Account type", {"fields": ("is_organisation", "is_individual")}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )
    search_fields = ("email", "first_name", "last_name")
    ordering = ("email",)
    filter_horizontal = ("groups", "user_permissions", "badges")


# @admin.register(Group)
# class GroupAdmin(BaseGroupAdmin, ModelAdmin):
#     pass


@admin.register(Organisation)
class OrganisationAdmin(ModelAdmin):
    list_display = ("org_name", "user", "type_of_org", "org_address", "phone_number")
    list_filter = ("type_of_org",)
    search_fields = ("org_name", "user__email", "org_address")
    raw_id_fields = ("user",)


class SubscriptionPlanAdmin(ModelAdmin):
    list_display = ("name", "plan_type", "duration", "price", "is_active")
    list_filter = ("plan_type", "duration", "is_active")
    search_fields = ("name", "description")
    list_editable = ("is_active", "price")
    prepopulated_fields = {"name": ("plan_type", "duration")}


class UserSubscriptionAdmin(ModelAdmin):
    list_display = ("user", "plan", "start_date", "end_date", "is_active", "auto_renew")
    list_filter = ("is_active", "auto_renew", "plan__plan_type", "plan__duration")
    search_fields = ("user__email", "user__first_name", "user__last_name")
    raw_id_fields = ("user",)
    date_hierarchy = "start_date"


admin.site.register(User, UserAdmin)
admin.site.register(SubscriptionPlan, SubscriptionPlanAdmin)
admin.site.register(UserSubscription, UserSubscriptionAdmin)
