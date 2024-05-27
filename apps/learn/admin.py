from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import Coarse ,CoarseContent, CoarseEnrollment ,Badge

class CoarseResource(resources.ModelResource):
    class Meta:
        model = Coarse

class CoarseAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('id','image','name', 'description', 'created_at', 'updated_at')
    search_fields = ('name',)

    resource_class = CoarseResource
class CoarseContentResource(resources.ModelResource):
    class Meta:
        model = CoarseContent

class CoarseContentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('id','name','video','coarse', 'created_at', 'updated_at')
    search_fields = ('name',)

    resource_class = CoarseContentResource

class CoarseEnrollmentResource(resources.ModelResource):
    class Meta:
        model = CoarseEnrollment

class CoarseEnrollmentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('id','user', 'coarse','status','progress', 'last_content_accessed', 'updated_at')
    search_fields = ('coarse',)

    resource_class = CoarseEnrollmentResource

class BadgeResource(resources.ModelResource):
    class Meta:
        model = Badge

class BadgeAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('id','icon','name', 'description', 'created_at', 'updated_at')
    search_fields = ('name',)

admin.site.register(CoarseEnrollment, CoarseEnrollmentAdmin)
admin.site.register(CoarseContent, CoarseContentAdmin)
admin.site.register(Coarse, CoarseAdmin)
admin.site.register(Badge, BadgeAdmin)