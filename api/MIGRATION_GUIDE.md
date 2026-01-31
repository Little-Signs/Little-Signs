# Migration Guide for Little Signs App Restructure

## Overview
This document outlines the migration process from the old app structure to the new, more maintainable structure designed specifically for a kids' sign language learning platform.

## Old Structure → New Structure

### Apps Mapping
- `learn` → `learning` (courses, lessons, signs)
- `users` → `accounts` (user management, authentication)
- `pages` → `content` (static pages, CMS)
- `misc` → `core` (utilities, base models)
- New: `progress` (enrollments, tracking)
- New: `gamification` (badges, rewards)
- New: `parental` (parent controls, reports)
- New: `communication` (notifications, emails)
- New: `api` (REST API endpoints)

## Migration Steps

### Phase 1: Setup New Apps ✅
- [x] Create new app directories
- [x] Create basic app configuration
- [x] Set up initial models structure

### Phase 2: Model Migration
1. **Update Django Settings**
   ```python
   # Add to INSTALLED_APPS in settings.py
   INSTALLED_APPS = [
       # ... existing apps
       'apps.core',
       'apps.accounts',
       'apps.learning',
       'apps.progress',
       'apps.gamification',
       'apps.parental',
       'apps.content',
       'apps.communication',
       'apps.api',
   ]
   ```

2. **Create Migrations for New Models**
   ```bash
   python manage.py makemigrations core
   python manage.py makemigrations accounts
   python manage.py makemigrations learning
   python manage.py makemigrations progress
   python manage.py makemigrations gamification
   python manage.py makemigrations parental
   python manage.py makemigrations content
   python manage.py makemigrations communication
   python manage.py makemigrations api
   ```

3. **Data Migration Scripts**
   Create data migrations to move data from old models to new ones:
   - Users → Accounts.User
   - Coarse/CoarseContent → Learning.Course/Lesson
   - CoarseEnrollment → Progress.Enrollment
   - Badge → Gamification.Badge
   - Pages models → Content models

### Phase 3: Update Code References
1. **Import Updates**
   ```python
   # Old
   from apps.learn.models import Course
   from apps.users.models import User
   
   # New
   from apps.learning.models import Course
   from apps.accounts.models import User
   ```

2. **URL Updates**
   - Update URL patterns to use new app namespaces
   - Update view imports and references

3. **Template Updates**
   - Update template extends and includes
   - Update template tags and filters

### Phase 4: Admin Configuration
- Create admin.py files for each new app
- Configure admin interfaces with kid-friendly features
- Set up proper permissions and access controls

### Phase 5: Testing
- Write tests for all new models and functionality
- Test data migration scripts thoroughly
- Verify all existing functionality works

### Phase 6: Cleanup
- Remove old app directories after successful migration
- Clean up unused imports and code
- Update documentation

## Data Migration Scripts

### User Migration
```python
# apps/accounts/migrations/0002_migrate_users.py
from django.db import migrations

def migrate_users(apps, schema_editor):
    OldUser = apps.get_model('users', 'User')
    NewUser = apps.get_model('accounts', 'User')
    
    for old_user in OldUser.objects.all():
        new_user = NewUser(
            email=old_user.email,
            first_name=old_user.first_name,
            last_name=old_user.last_name,
            # ... copy other fields
        )
        new_user.save()

class Migration(migrations.Migration):
    dependencies = [
        ('accounts', '0001_initial'),
        ('users', '0009_subscriptionplan_usersubscription'),
    ]
    
    operations = [
        migrations.RunPython(migrate_users),
    ]
```

## Benefits of New Structure

### 1. **Clear Separation of Concerns**
- Each app has a single, well-defined responsibility
- Easier to understand and maintain codebase

### 2. **Kid-Focused Features**
- Dedicated parental controls app
- Gamification features for engagement
- Progress tracking tailored for children

### 3. **Scalability**
- Easy to add new features without cluttering existing apps
- Clear boundaries for future development

### 4. **Maintainability**
- Smaller, focused apps are easier to debug
- Clear naming conventions
- Better code organization

### 5. **Security**
- Isolated parental controls
- Better permission management
- Easier to implement kid-specific security features

## Rollback Plan

If migration fails:
1. Keep old apps until migration is fully tested
2. Use database backups before migration
3. Have feature flags to switch between old/new implementations
4. Monitor performance and error rates closely

## Timeline Estimate

- **Phase 1**: 1 day (completed)
- **Phase 2**: 3-5 days (models, migrations, data scripts)
- **Phase 3**: 2-3 days (code updates)
- **Phase 4**: 2 days (admin setup)
- **Phase 5**: 3-5 days (testing)
- **Phase 6**: 1 day (cleanup)

**Total**: 12-17 days

## Next Steps

1. Review and approve the new app structure
2. Update Django settings
3. Create and run migrations
4. Update code references
5. Test thoroughly
6. Deploy to staging environment
7. Deploy to production

## Support

For questions during migration:
- Refer to the new model documentation
- Check the Django settings update file
- Review the migration scripts
- Contact the development team
