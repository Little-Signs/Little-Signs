# Apps Restructure Plan for Little Signs

## Current Structure Issues
- `learn` - too generic, doesn't clearly indicate purpose
- `misc` - unclear what this contains
- `pages` - generic name for static content
- Overall structure doesn't reflect the educational/child-focused nature

## Proposed New Structure

### Core Apps (Keep but rename for clarity)
1. **`learning`** (rename from `learn`)
   - Contains courses, lessons, signs, practice sessions
   - More descriptive name for educational content

2. **`accounts`** (rename from `users`)
   - User management, authentication, profiles
   - Standard Django naming convention

3. **`content`** (rename from `pages`)
   - Static pages, about us, team info
   - Better describes the purpose

### New Apps to Add
4. **`progress`** (extract from learning)
   - Track user progress, achievements, badges
   - Separate concerns for better maintainability

5. **`gamification`** (new app)
   - Points, rewards, streaks, challenges
   - Kid-focused engagement features

6. **`parental`** (new app)
   - Parent profiles, controls, reports
   - Specific to family management

7. **`communication`** (extract from misc)
   - Notifications, emails, messaging
   - Clear communication features

### Utility Apps
8. **`core`** (rename from `misc`)
   - Shared utilities, base models, helpers
   - Better name than "misc"

9. **`api`** (new app)
   - API endpoints, serializers
   - Separate API logic

## Migration Strategy
1. Create new app directories
2. Move models with proper imports
3. Update Django settings
4. Create migrations for moved models
5. Update URLs and imports throughout project
6. Test thoroughly

## Benefits
- Clearer purpose for each app
- Better separation of concerns
- Easier for new developers to understand
- Scalable structure for future features
- Kid-focused organization
