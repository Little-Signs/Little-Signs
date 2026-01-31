from django.apps import AppConfig


class ParentalConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.parental'
    verbose_name = 'Parental Controls'
