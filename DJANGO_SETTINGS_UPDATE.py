# Django Settings Update for New App Structure
# Add this to your INSTALLED_APPS in settings.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # Third party apps
    # ... your other third party apps
    
    # Little Signs Apps - New Structure
    'apps.core',                    # Core utilities and base models
    'apps.accounts',                # User management and authentication
    'apps.learning',                # Courses, lessons, signs
    'apps.progress',               # Enrollment and progress tracking
    'apps.gamification',           # Badges, points, rewards
    'apps.parental',               # Parent profiles and controls
    'apps.content',                # Static pages and content
    'apps.communication',          # Notifications and messaging
    'apps.api',                    # API endpoints
    
    # Legacy apps (to be removed after migration)
    'apps.learn',
    'apps.users',
    'apps.pages',
    'apps.misc',
]

# App-specific settings

# Core Settings
CORE_SETTINGS = {
    'DEFAULT_PAGE_SIZE': 20,
    'MAX_UPLOAD_SIZE': 50 * 1024 * 1024,  # 50MB
}

# Learning Settings
LEARNING_SETTINGS = {
    'MAX_LESSON_DURATION': 60,  # minutes
    'DEFAULT_PRACTICE_GOAL': 15,  # minutes per day
    'ALLOWED_VIDEO_FORMATS': ['mp4', 'webm', 'mov'],
    'ALLOWED_IMAGE_FORMATS': ['jpg', 'jpeg', 'png', 'gif'],
}

# Parental Controls
PARENTAL_SETTINGS = {
    'DEFAULT_MAX_DAILY_MINUTES': 120,  # 2 hours
    'MIN_OVERRIDE_CODE_LENGTH': 6,
    'AUTO_GENERATE_REPORTS': True,
    'REPORT_FREQUENCY': 'weekly',  # daily, weekly, monthly
}

# Gamification Settings
GAMIFICATION_SETTINGS = {
    'POINTS_PER_LESSON': 10,
    'POINTS_PER_SIGN': 5,
    'STREAK_BONUS_MULTIPLIER': 1.5,
    'BADGE_NOTIFICATIONS': True,
}

# Email Settings for Child-Friendly Communication
EMAIL_SETTINGS = {
    'USE_CHILD_FRIENDLY_TEMPLATES': True,
    'PARENT_COPY_ALL_EMAILS': True,
    'BADGE_CELEBRATION_EMAILS': True,
    'PROGRESS_REPORT_SCHEDULE': 'weekly',
}

# Security Settings for Kids Platform
SECURITY_SETTINGS = {
    'REQUIRE_PARENT_APPROVAL': True,
    'MINIMUM_AGE': 5,
    'DATA_RETENTION_DAYS': 365,
    'COPPA_COMPLIANT': True,
}

# API Settings
API_SETTINGS = {
    'DEFAULT_VERSION': 'v1',
    'RATE_LIMIT_PER_USER': 1000,  # requests per hour
    'ENABLE_PARENTAL_API_ENDPOINTS': True,
}

# Media Storage Settings (if using custom storage)
MEDIA_STORAGE_SETTINGS = {
    'USE_CDN': True,
    'CACHE_DURATION': 86400,  # 24 hours
    'THUMBNAIL_SIZES': [150, 300, 600],
}

# Logging Configuration for Monitoring
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'child_friendly': {
            'format': '[{levelname}] {asctime} - {message}',
            'style': '{',
        },
    },
    'handlers': {
        'file': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            'filename': 'little_signs.log',
            'formatter': 'child_friendly',
        },
    },
    'loggers': {
        'apps': {
            'handlers': ['file'],
            'level': 'INFO',
            'propagate': True,
        },
    },
}

# Internationalization for Kids
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Child-safe settings
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'apps.core.context_processors.kid_friendly_settings',
            ],
        },
    },
]

# Static and Media files
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Security settings for kids platform
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# Session settings for kids
SESSION_COOKIE_AGE = 3600  # 1 hour
SESSION_SAVE_EVERY_REQUEST = True
CSRF_COOKIE_AGE = 3600

# Password requirements for parent accounts
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 8,
        }
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
