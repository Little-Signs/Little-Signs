from django.contrib import admin

from .models import Course, Lesson, Sign, DifficultyLevel


@admin.register(DifficultyLevel)
class DifficultyLevelAdmin(admin.ModelAdmin):
    list_display = ['name', 'level_order', 'is_active']
    list_filter = ['is_active']
    search_fields = ['name']


@admin.register(Sign)
class SignAdmin(admin.ModelAdmin):
    list_display = ['word', 'difficulty_level', 'category', 'is_active']
    list_filter = ['difficulty_level', 'category', 'is_active']
    search_fields = ['word', 'description']


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ['title', 'course', 'is_published']
    list_filter = ['is_published', 'course']
    search_fields = ['title', 'description', 'course__title']


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'is_published']
    list_filter = ['is_published']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
