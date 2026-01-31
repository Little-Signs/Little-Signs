from django.contrib import admin

from .models import Enrollment, PracticeSession, CourseEnrollment


@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ['user', 'course', 'status']
    list_filter = ['status']
    search_fields = ['user__email', 'course__title']


@admin.register(PracticeSession)
class PracticeSessionAdmin(admin.ModelAdmin):
    list_display = ['user', 'session_type']
    list_filter = ['session_type']
    search_fields = ['user__email']


@admin.register(CourseEnrollment)
class CourseEnrollmentAdmin(admin.ModelAdmin):
    list_display = ['user', 'course', 'status']
    list_filter = ['status']
    search_fields = ['user__email', 'course__title']
