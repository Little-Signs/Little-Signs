# Little Signs API Documentation

## Overview
This is a comprehensive REST API for the Little Signs kids' sign language learning platform. The API provides endpoints for course management, progress tracking, gamification, parental controls, and administrative functions.

## Base URL
```
https://api.littlesigns.com/api/v1/
```

## Authentication
The API uses JWT (JSON Web Token) authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Authentication Endpoints

#### Register User
```http
POST /api/v1/auth/register/
Content-Type: application/json

{
    "email": "parent@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "password": "securepassword123",
    "confirm_password": "securepassword123",
    "date_of_birth": "1980-01-01",
    "gender": "Male",
    "city": "New York"
}
```

#### Login
```http
POST /api/v1/auth/login/
Content-Type: application/json

{
    "email": "parent@example.com",
    "password": "securepassword123"
}
```

Response:
```json
{
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

#### Refresh Token
```http
POST /api/v1/auth/refresh/
Content-Type: application/json

{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}
```

## Learning Endpoints

### Courses (Public)
```http
GET /api/v1/courses/
GET /api/v1/courses/?difficulty=Beginner
GET /api/v1/courses/?min_age=5&max_age=8
GET /api/v1/courses/?featured=true
```

```http
GET /api/v1/courses/{id}/
```

### Lessons (Public)
```http
GET /api/v1/courses/{course_id}/lessons/
```

### Signs (Public)
```http
GET /api/v1/signs/
GET /api/v1/signs/?category=Animals
GET /api/v1/signs/?difficulty=Beginner
GET /api/v1/signs/?search=cat
```

```http
GET /api/v1/signs/{id}/
```

### Sign Categories (Public)
```http
GET /api/v1/sign-categories/
```

### Difficulty Levels (Public)
```http
GET /api/v1/difficulty-levels/
```

## Progress Endpoints (Authenticated)

### User Profile
```http
GET /api/v1/auth/profile/
PUT /api/v1/auth/profile/update/
```

### Enrollments
```http
GET /api/v1/enrollments/
POST /api/v1/courses/{course_id}/enroll/
```

```http
POST /api/v1/enrollments/{enrollment_id}/lessons/{lesson_id}/complete/
```

### Practice Sessions
```http
GET /api/v1/practice-sessions/
POST /api/v1/practice-sessions/create/
```

Request body:
```json
{
    "duration_minutes": 30,
    "signs_practiced": [1, 2, 3],
    "signs_learned": 5,
    "signs_reviewed": 10,
    "accuracy_score": 85,
    "session_type": "LESSON"
}
```

## Gamification Endpoints

### Badges
```http
GET /api/v1/badges/my/
GET /api/v1/badges/
```

## Parental Control Endpoints (Authenticated)

### Parent Profile
```http
GET /api/v1/parent/profile/
POST /api/v1/parent/profile/
```

### Child Progress
```http
GET /api/v1/parent/children/{child_id}/progress/
```

## Admin Endpoints (Admin/Staff Only)

### Dashboard
```http
GET /api/v1/admin/dashboard/
```

### User Management
```http
GET /api/v1/admin/users/
```

### Enrollment Management
```http
GET /api/v1/admin/enrollments/
```

### Badge Management
```http
POST /api/v1/admin/badges/award/
```

Request body:
```json
{
    "user_id": 123,
    "badge_id": 456
}
```

### Organization Management
```http
GET /api/v1/admin/organisations/
POST /api/v1/admin/organisations/
```

### Subscription Plans
```http
GET /api/v1/admin/subscription-plans/
POST /api/v1/admin/subscription-plans/
```

## Permission Levels

### Public Endpoints
- Course listing and details
- Sign catalog
- Sign categories
- Difficulty levels

### Authenticated Endpoints
- User profile management
- Course enrollment
- Progress tracking
- Practice sessions
- Personal badges

### Parent-Only Endpoints
- Child progress monitoring
- Parent profile management

### Admin/Staff Only Endpoints
- User management
- Course management (create/update/delete)
- Badge awarding
- Organization management
- Subscription plan management
- Administrative dashboard

## Rate Limiting

- **Default**: 1000 requests per hour
- **Authentication endpoints**: 5 requests per minute
- **Admin users**: 5000 requests per hour

## Error Handling

All API errors return a consistent format:

```json
{
    "error": true,
    "status_code": 400,
    "message": "Invalid data provided",
    "details": {
        "field_name": ["Error message for this field"]
    },
    "path": "/api/v1/courses/1/enroll/",
    "method": "POST"
}
```

### Common Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Rate Limit Exceeded
- `500` - Internal Server Error

## Pagination

List endpoints support pagination with the following parameters:
- `page` - Page number (default: 1)
- `page_size` - Items per page (default: 20, max: 100)

Example:
```http
GET /api/v1/courses/?page=2&page_size=10
```

## Search and Filtering

Many endpoints support search and filtering:

### Courses
- `difficulty` - Filter by difficulty level
- `min_age` - Minimum age filter
- `max_age` - Maximum age filter
- `featured` - Filter featured courses

### Signs
- `category` - Filter by category name
- `difficulty` - Filter by difficulty level
- `search` - Search in sign words

## API Documentation

Interactive API documentation is available at:
- **Swagger UI**: `/api/docs/`
- **ReDoc**: `/api/redoc/`

## Security Features

- JWT authentication with refresh tokens
- Rate limiting per user and IP
- CORS protection
- Request/response logging
- SQL injection protection
- XSS protection headers

## SDK Examples

### Python (requests)
```python
import requests

# Login
response = requests.post('https://api.littlesigns.com/api/v1/auth/login/', json={
    'email': 'user@example.com',
    'password': 'password123'
})
token = response.json()['access']

# Get courses
headers = {'Authorization': f'Bearer {token}'}
response = requests.get('https://api.littlesigns.com/api/v1/courses/', headers=headers)
courses = response.json()
```

### JavaScript (fetch)
```javascript
// Login
const loginResponse = await fetch('/api/v1/auth/login/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: 'user@example.com',
        password: 'password123'
    })
});
const {access} = await loginResponse.json();

// Get courses
const coursesResponse = await fetch('/api/v1/courses/', {
    headers: {'Authorization': `Bearer ${access}`}
});
const courses = await coursesResponse.json();
```

## Support

For API support:
- Email: api-support@littlesigns.com
- Documentation: https://docs.littlesigns.com/api
- Status Page: https://status.littlesigns.com
