from django.apps import AppConfig


class LearnConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.learn'

    def ready(self):
        import apps.learn.signals
