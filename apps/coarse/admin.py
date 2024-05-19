from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import Coarse, CoarseContent, CoarseEnrollment

class CoarseResource(resources.ModelResource):
    class Meta:
        model = Coarse

class CoarseAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('id','image','name', 'description', 'created_at', 'updated_at')
    search_fields = ('name',)

    resource_class = CoarseResource

admin.site.register(Coarse, CoarseAdmin)

class CoarseContentResource(resources.ModelResource):
    class Meta:
        model = CoarseContent

class CoarseContentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('id','name', 'image','video','coarse', 'created_at', 'updated_at')
    search_fields = ('name',)

    resource_class = CoarseContentResource

admin.site.register(CoarseContent, CoarseContentAdmin)

class CoarseEnrollmentResource(resources.ModelResource):
    class Meta:
        model = CoarseEnrollment

class CoarseEnrollmentAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ('id','user', 'coarse','status','progress', 'last_content_accessed', 'updated_at')
    search_fields = ('coarse',)

    resource_class = CoarseEnrollmentResource

admin.site.register(CoarseEnrollment, CoarseEnrollmentAdmin)