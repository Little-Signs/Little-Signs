from django.contrib import admin

from .models import ParentProfile, ChildProfile, ScreenTimeLimit, ProgressReport


@admin.register(ParentProfile)
class ParentProfileAdmin(admin.ModelAdmin):
    list_display = ['user']
    search_fields = ['user__email']


@admin.register(ChildProfile)
class ChildProfileAdmin(admin.ModelAdmin):
    list_display = ['user']
    search_fields = ['user__email']


@admin.register(ScreenTimeLimit)
class ScreenTimeLimitAdmin(admin.ModelAdmin):
    list_display = ['child']
    search_fields = ['child__user__email']


@admin.register(ProgressReport)
class ProgressReportAdmin(admin.ModelAdmin):
    list_display = ['child']
    search_fields = ['child__user__email']
