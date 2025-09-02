import os

import environ
from django.templatetags.static import static
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
    "unfold",
    "unfold.contrib.filters",
    "unfold.contrib.forms",
    "unfold.contrib.inlines",
    "unfold.contrib.import_export",
    "unfold.contrib.guardian",
    "unfold.contrib.simple_history",
    "django.contrib.admin",
    # First party
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.sitemaps",
    # Third party
    "storages",
    "import_export",
    "webpack_loader",
    "active_link",
    "corsheaders",
    "apps.misc",
    "apps.users",
    "apps.pages",
    "apps.learn",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = (
    "http://localhost:8000",
    "https://littlesigns.co.zw",
    "https://www.littlesigns.co.zw",
)

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [root_path("templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "apps.misc.context_processors.django_settings",
            ],
        },
    },
]

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

STATIC_URL = env("STATIC_URL", default="/static/")
STATIC_ROOT = os.path.join("static")
STATICFILES_STORAGE = "whitenoise.storage.CompressedStaticFilesStorage"

PUBLIC_MEDIA_LOCATION = "media"
MEDIA_URL = f"https://{AWS_S3_CUSTOM_DOMAIN}/{PUBLIC_MEDIA_LOCATION}/"
DEFAULT_FILE_STORAGE = "apps.storage_backends.PublicMediaStorage"
ADMIN_MEDIA_PREFIX = STATIC_URL + "admin/"

STATICFILES_DIRS = (
    ("bundles", root_path("assets/bundles")),
    ("js", root_path("assets/js")),
    ("img", root_path("assets/img")),
    ("pic", root_path("assets/pic")),
    ("fonts", root_path("assets/fonts")),
)

webpack_stats_filename = "webpack-bundle.%s.json" % ENV
webpack_rev_stats_filename = "webpack-bundle-rev.%s.json" % ENV
stats_file = os.path.join(root_path("assets/bundles/"), webpack_stats_filename)
stats_rev_file = os.path.join(root_path("assets/bundles/"), webpack_rev_stats_filename)

WEBPACK_LOADER = {
    "DEFAULT": {
        "CACHE": not DEBUG,
        "BUNDLE_DIR_NAME": "bundles/",  # must end with slash
        "STATS_FILE": stats_file,
        "POLL_INTERVAL": 0.1,
        "TIMEOUT": None,
        "IGNORE": [r".+\.hot-update.js", r".+\.map"],
    },
    "REV": {
        "CACHE": not DEBUG,
        "BUNDLE_DIR_NAME": "bundles/",  # must end with slash
        "STATS_FILE": stats_rev_file,
        "POLL_INTERVAL": 0.1,
        "TIMEOUT": None,
        "IGNORE": [r".+\.hot-update.js", r".+\.map"],
    },
}

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
# LOGS_ROOT = env("LOGS_ROOT", default=root_path("logs"))
# LOGGING = {
#     "version": 1,
#     "disable_existing_loggers": False,
#     "formatters": {
#         "console_format": {"format": "%(name)-12s %(levelname)-8s %(message)s"},
#         "file_format": {
#             "format": "%(asctime)s %(name)-12s %(levelname)-8s %(message)s"
#         },
#     },
#     "handlers": {
#         "console": {
#             "level": "DEBUG",
#             "class": "logging.StreamHandler",
#             "formatter": "console_format",
#         },
#         "file": {
#             "level": "INFO",
#             "class": "logging.handlers.RotatingFileHandler",
#             "filename": os.path.join(LOGS_ROOT, "django.log"),
#             "maxBytes": 1024 * 1024 * 15,  # 15MB
#             "backupCount": 10,
#             "formatter": "file_format",
#         },
#     },
#     "loggers": {
#         "django": {
#             "level": "INFO",
#             "handlers": ["console", "file"],
#             "propagate": False,
#         },
#         "apps": {
#             "level": "DEBUG",
#             "handlers": ["console", "file"],
#             "propagate": False,
#         },
#     },
# }

USE_SENTRY = env.bool("USE_SENTRY", default=False)

if USE_SENTRY:
    import sentry_sdk
    from sentry_sdk.integrations.django import DjangoIntegration

    sentry_sdk.init(
        dsn=env("SENTRY_DSN"), integrations=[DjangoIntegration()], environment=ENV
    )


UNFOLD = {
    "SITE_TITLE": "Little Signs - Admin Dashboard",
    "SITE_HEADER": "Little Signs Admin",
    "SITE_SUBHEADER": "Little Signs",
    "SITE_DROPDOWN": [
        {
            "icon": "diamond",
            "title": _("website"),
            "link": "https://littlesigns.co.zw",
        },
    ],
    "SITE_URL": "/",
    "SITE_ICON": {
        "light": lambda request: static("img/logo/favicon-32x32.png"),
        "dark": lambda request: static("img/logo/favicon-32x32.png"),
    },
    "SITE_LOGO": {
        "light": lambda request: static("img/logo/favicon-32x32.png"),
        "dark": lambda request: static("img/logo/favicon-32x32.png"),
    },
    "SITE_SYMBOL": "speed",  # symbol from icon set
    "SITE_FAVICONS": [
        {
            "rel": "icon",
            "sizes": "32x32",
            "type": "image/x-icon",
            "href": lambda request: static("img/logo/favicon.ico"),
        }
    ],
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "SHOW_BACK_BUTTON": False,
    "DASHBOARD_CALLBACK": "conf.utils.dashboard_callback",
    "THEME": "light",
    "LOGIN": {
        "redirect_after": lambda request: reverse_lazy("admin:index"),
    },
    "STYLES": [
        lambda request: static("css/style.css"),
    ],
    "SCRIPTS": [
        lambda request: static("js/script.js"),
    ],
    "BORDER_RADIUS": "6px",
    "COLORS": {
        "base": {
            "50": "249, 250, 251",
            "100": "243, 244, 246",
            "200": "229, 231, 235",
            "300": "209, 213, 219",
            "400": "156, 163, 175",
            "500": "107, 114, 128",
            "600": "75, 85, 99",
            "700": "55, 65, 81",
            "800": "31, 41, 55",
            "900": "17, 24, 39",
            "950": "3, 7, 18",
        },
        "primary": {
            "50": "250, 245, 255",
            "100": "243, 232, 255",
            "200": "233, 213, 255",
            "300": "216, 180, 254",
            "400": "192, 132, 252",
            "500": "168, 85, 247",
            "600": "147, 51, 234",
            "700": "126, 34, 206",
            "800": "107, 33, 168",
            "900": "88, 28, 135",
            "950": "59, 7, 100",
        },
        "font": {
            "subtle-light": "var(--color-base-500)",  # text-base-500
            "subtle-dark": "var(--color-base-400)",  # text-base-400
            "default-light": "var(--color-base-600)",  # text-base-600
            "default-dark": "var(--color-base-300)",  # text-base-300
            "important-light": "var(--color-base-900)",  # text-base-900
            "important-dark": "var(--color-base-100)",  # text-base-100
        },
    },
    "EXTENSIONS": {
        "modeltranslation": {
            "flags": {
                "en": "🇬🇧",
            },
        },
    },
    "SIDEBAR": {
        "show_search": False,
        "show_all_applications": False,
        "navigation": [
            {
                "title": _("Navigation"),
                "separator": True,
                "collapsible": False,
                "items": [
                    {
                        "title": _("Dashboard"),
                        "icon": "dashboard",
                        "link": reverse_lazy("admin:index"),
                        "permission": lambda request: request.user.is_superuser,
                    },
                    {
                        "title": _("Users"),
                        "icon": "people",
                        "link": reverse_lazy("admin:users_user_changelist"),
                    },
                ],
            },
            {
                "title": _("Subscriptions"),
                "separator": True,
                "items": [
                    {
                        "title": _("Subscription Plans"),
                        "icon": "card_membership",
                        "link": reverse_lazy("admin:users_subscriptionplan_changelist"),
                    },
                    {
                        "title": _("User Subscriptions"),
                        "icon": "subscriptions",
                        "link": reverse_lazy("admin:users_usersubscription_changelist"),
                    },
                ],
            },
            {
                "title": _("Organizations"),
                "separator": True,
                "items": [
                    {
                        "title": _("Organizations"),
                        "icon": "business",
                        "link": reverse_lazy("admin:users_organisation_changelist"),
                    },
                ],
            },
            {
                "title": _("Learning"),
                "separator": True,
                "items": [
                    {
                        "title": _("Courses"),
                        "icon": "school",
                        "link": reverse_lazy("admin:learn_coarse_changelist"),
                    },
                    {
                        "title": _("Course Contents"),
                        "icon": "video_library",
                        "link": reverse_lazy("admin:learn_coarsecontent_changelist"),
                    },
                    {
                        "title": _("Enrollments"),
                        "icon": "assignment_turned_in",
                        "link": reverse_lazy("admin:learn_coarseenrollment_changelist"),
                    },
                ],
            },
            {
                "title": _("Achievements"),
                "separator": True,
                "items": [
                    {
                        "title": _("Badges"),
                        "icon": "military_tech",
                        "link": reverse_lazy("admin:learn_badge_changelist"),
                    },
                ],
            },
        ],
    },
}
