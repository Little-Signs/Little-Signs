from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import Course, CourseContent, CourseEnrollment, Badge


class CourseResource(resources.ModelResource):
    class Meta:
        model = Course


class CourseAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ("id", "cover_image", "title", "description", "created_at", "updated_at")
    search_fields = ("title",)

    resource_class = CourseResource


class CourseContentResource(resources.ModelResource):
    class Meta:
        model = CourseContent


class CourseContentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ("id", "name", "video", "course", "created_at", "updated_at")
    search_fields = ("name",)

    resource_class = CourseContentResource


class CourseEnrollmentResource(resources.ModelResource):
    class Meta:
        model = CourseEnrollment


class CourseEnrollmentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = (
        "id",
        "user",
        "course",
        "status",
        "progress",
        "last_content_accessed",
        "updated_at",
    )
    search_fields = ("course",)

    resource_class = CourseEnrollmentResource


class BadgeResource(resources.ModelResource):
    class Meta:
        model = Badge


class BadgeAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ("id", "icon", "name", "description", "created_at", "updated_at")
    search_fields = ("name",)


admin.site.register(CourseEnrollment, CourseEnrollmentAdmin)
admin.site.register(CourseContent, CourseContentAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Badge, BadgeAdmin)
