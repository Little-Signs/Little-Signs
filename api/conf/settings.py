import os

import environ
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _


env = environ.Env()
root_path = environ.Path(__file__) - 2
env.read_env(env_file=root_path(".env"))


# -----------------------------------------------------------------------------
# Basic Config
# -----------------------------------------------------------------------------
ENV = env("ENV", default="prod")
assert ENV in ["dev", "test", "prod", "qa"]
DEBUG = env.bool("DEBUG", default=False)
BASE_DIR = root_path()
ROOT_URLCONF = "conf.urls"
WSGI_APPLICATION = "conf.wsgi.application"

# -----------------------------------------------------------------------------
# Time & Language
# -----------------------------------------------------------------------------
LANGUAGE_CODE = env("LANGUAGE_CODE", default="en-us")
TIME_ZONE = env("TIMEZONE", default="UTC")
USE_I18N = env("USE_I18N", default=True)
USE_L10N = env("USE_L10N", default=True)
USE_TZ = env("USE_TZ", default=True)

# -----------------------------------------------------------------------------
# Emails
# -----------------------------------------------------------------------------
DEFAULT_FROM_EMAIL = env("EMAIL_FROM", default="")
EMAIL_BACKEND = env(
    "EMAIL_BACKEND", default="django.core.mail.backends.smtp.EmailBackend"
)
EMAIL_HOST = env("EMAIL_HOST", default="")
EMAIL_PORT = env("EMAIL_PORT", default="")
EMAIL_HOST_USER = env("EMAIL_HOST_USER", default="")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD", default="")
EMAIL_USE_SSL = True  # Use this for SSL instead of TLS
CONTACT_EMAIL = "info@littlesigns.co.zw"

# -----------------------------------------------------------------------------
# Security and Users
# -----------------------------------------------------------------------------
SECRET_KEY = env("SECRET_KEY")
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS", default=[])
AUTH_USER_MODEL = "users.User"
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]
AUTHENTICATION_BACKENDS = ("django.contrib.auth.backends.ModelBackend",)
LOGIN_URL = env("LOGIN_URL", default="/account/login/")
LOGIN_REDIRECT_URL = env("LOGIN_REDIRECT_URL", default="/learn/")

# -----------------------------------------------------------------------------
# Databases
# -----------------------------------------------------------------------------
DJANGO_DATABASE_URL = env.db("DATABASE_URL")

DATABASES = {"default": DJANGO_DATABASE_URL}

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# -----------------------------------------------------------------------------
# Applications configuration
# -----------------------------------------------------------------------------
INSTALLED_APPS = [
    "django.contrib.admin",
    # First party
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.staticfiles",
    "django.contrib.sitemaps",
    # Third party
    "storages",
    "import_export",
    "active_link",
    "corsheaders",
    "rest_framework",
    "rest_framework_simplejwt",
    "drf_yasg",
    # Little Signs Apps
    "apps.core",
    "apps.accounts",
    "apps.learning",
    "apps.progress",
    "apps.gamification",
    "apps.parental",
    "apps.content",
    "apps.communication",
    "apps.api",
    # Legacy apps (to be removed after migration)
    "apps.misc",
    "apps.users",
    "apps.pages",
    "apps.learn",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "apps.api.middleware.APISecurityMiddleware",
    "apps.api.middleware.APIRateLimitMiddleware",
    "apps.api.middleware.APILoggingMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = (
    "http://localhost:8000",
    "https://littlesigns.co.zw",
    "https://www.littlesigns.co.zw",
)

# Templates removed - using API-only approach
# No template configuration needed for REST API

# -----------------------------------------------------------------------------
# REST Framework Configuration
# -----------------------------------------------------------------------------
from datetime import timedelta

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.MultiPartParser',
        'rest_framework.parsers.FormParser',
    ],
    'EXCEPTION_HANDLER': 'apps.api.exceptions.custom_exception_handler',
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle'
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '100/hour',
        'user': '1000/hour',
        'admin': '5000/hour',
    },
}

# JWT Settings
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',
}

# API Security Settings
API_RATE_LIMITS = {
    'default': ('1000', 'hour'),    # 1000 requests per hour
    'auth': ('5', 'minute'),        # 5 auth requests per minute
    'admin': ('5000', 'hour'),      # 5000 requests per hour for admins
}

# CORS Settings for API
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # React development
    "http://127.0.0.1:3000",
    "https://littlesigns.co.zw",
    "https://www.littlesigns.co.zw",
]

CORS_ALLOW_CREDENTIALS = True

# -----------------------------------------------------------------------------
# Static & Media Files
# -----------------------------------------------------------------------------

# Cloudflare R2 credentials
AWS_ACCESS_KEY_ID = env("R2_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = env("R2_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = env("R2_BUCKET_NAME")
AWS_DEFAULT_ACL = "public-read"
AWS_S3_CUSTOM_DOMAIN = env("R2_CUSTOM_DOMAIN", default=f"storage.littlesigns.co.zw")
AWS_S3_ENDPOINT_URL = env(
    "R2_ENDPOINT_URL", default="https://{account_id}.r2.cloudflarestorage.com"
)
AWS_S3_OBJECT_PARAMETERS = {
    "CacheControl": "max-age=86400",
}
# For serving static files directly from S3
AWS_S3_URL_PROTOCOL = "https:"
AWS_S3_USE_SSL = True
AWS_S3_VERIFY = True

# Static files configuration for API
STATIC_URL = env("STATIC_URL", default="/static/")
STATIC_ROOT = os.path.join("static")
STATICFILES_STORAGE = "whitenoise.storage.CompressedStaticFilesStorage"

# Media files configuration
PUBLIC_MEDIA_LOCATION = "media"
MEDIA_URL = f"https://{AWS_S3_CUSTOM_DOMAIN}/{PUBLIC_MEDIA_LOCATION}/"
DEFAULT_FILE_STORAGE = "apps.storage_backends.PublicMediaStorage"
ADMIN_MEDIA_PREFIX = STATIC_URL + "admin/"

# Static files directories (if needed for admin)
STATICFILES_DIRS = (
    ("bundles", root_path("assets/bundles")),
    ("js", root_path("assets/js")),
    ("img", root_path("assets/img")),
    ("pic", root_path("assets/pic")),
    ("fonts", root_path("assets/fonts")),
)

# -----------------------------------------------------------------------------
# Celery
# -----------------------------------------------------------------------------
CELERY_BROKER_URL = env("CELERY_BROKER_URL", default="redis://cache")
CELERY_TASK_ALWAYS_EAGER = env("CELERY_TASK_ALWAYS_EAGER", default=False)

# -----------------------------------------------------------------------------
# Django Debug Toolbar
# -----------------------------------------------------------------------------
USE_DEBUG_TOOLBAR = env.bool("USE_DEBUG_TOOLBAR", default=DEBUG)

if USE_DEBUG_TOOLBAR:
    INSTALLED_APPS += ["debug_toolbar"]
    INTERNAL_IPS = ["127.0.0.1"]
    MIDDLEWARE.insert(0, "debug_toolbar.middleware.DebugToolbarMiddleware")


# -----------------------------------------------------------------------------
# Django Extensions
# -----------------------------------------------------------------------------
USE_DJANGO_EXTENSIONS = env.bool("USE_DJANGO_EXTENSIONS", default=False)
if USE_DJANGO_EXTENSIONS:
    INSTALLED_APPS += [
        "django_extensions",
    ]


# -----------------------------------------------------------------------------
# Logging
# -----------------------------------------------------------------------------
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "{levelname} {asctime} {module} {process:d} {thread:d} {message}",
            "style": "{",
        },
        "simple": {
            "format": "{levelname} {message}",
            "style": "{",
        },
    },
    "handlers": {
        "file": {
            "level": "INFO",
            "class": "logging.FileHandler",
            "filename": "logs/api.log",
            "formatter": "verbose",
        },
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "formatter": "simple",
        },
    },
    "loggers": {
        "apps.api": {
            "handlers": ["file", "console"],
            "level": "INFO",
            "propagate": True,
        },
        "django": {
            "level": "INFO",
            "handlers": ["file", "console"],
            "propagate": False,
        },
        "apps": {
            "level": "DEBUG",
            "handlers": ["file", "console"],
            "propagate": False,
        },
    },
}

USE_SENTRY = env.bool("USE_SENTRY", default=False)

if USE_SENTRY:
    import sentry_sdk
    from sentry_sdk.integrations.django import DjangoIntegration

    sentry_sdk.init(
        dsn=env("SENTRY_DSN"), integrations=[DjangoIntegration()], environment=ENV
    )
