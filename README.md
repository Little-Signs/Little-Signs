# Little Signs Web Platform

<div align="center">
  <img src="https://www.littlesigns.co.zw/static/img/logo/android-chrome-512x512.png" width="200" alt="Little Signs Logo">
  <p><em>Our mission is to bridge educational gaps by providing every child with accessible learning tools that support their unique journeys</em></p>
</div>

## 🌟 About

Little Signs is an innovative educational platform dedicated to making sign language learning accessible to children everywhere. Through interactive tools, comprehensive video content, and AI-powered features, we're creating an inclusive learning environment for the deaf and hard-of-hearing community.

## ✨ Features

- **🎥 Comprehensive Video Library**: Extensive collection of sign language videos with Cloudflare R2 storage
- **🤖 AI-Powered Learning**: State-of-the-art AI solutions for personalized learning experiences
- **♿ WCAG-Compliant UI**: Fully accessible interface designed for diverse users
- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **🔐 Secure Authentication**: Robust user management and content protection
- **🚀 High Performance**: Optimized with modern web technologies
- **📊 Analytics & Progress Tracking**: Monitor learning progress and achievements

## 🏗️ Technology Stack

### Backend
- **Django**: Powerful Python web framework
- **PostgreSQL**: Reliable database management
- **Celery**: Asynchronous task processing
- **Cloudflare R2**: Scalable media storage

### Frontend
- **React 19**: Modern UI framework
- **Vite**: Fast build tool and development server
- **Redux Toolkit**: State management
- **TailwindCSS**: Utility-first CSS framework

### Infrastructure
- **Docker & Docker Compose**: Containerized development and deployment
- **Nginx**: Reverse proxy and static file serving
- **Sentry**: Error monitoring and performance tracking

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Little-Signs/Little-Signs.git
cd Little-Signs
```

### 2. Environment Configuration
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Start the Application
```bash
docker-compose up -d
```

### 4. Access the Platform
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **Admin Panel**: http://localhost:8000/admin

## 📁 Project Structure

```
Little-Signs/
├── api/                     # Django backend
│   ├── apps/               # Django applications
│   ├── conf/               # Configuration files
│   ├── static/             # Static files
│   ├── templates/          # Django templates
│   └── tests/              # Backend tests
├── frontend/               # React frontend
│   ├── src/                # React source code
│   ├── public/             # Public assets
│   └── dist/               # Build output
├── nginx/                  # Nginx configuration
├── .github/                # GitHub workflows
├── docker-compose.yml      # Docker configuration
└── .env.example           # Environment template
```

## 🔧 Development

### Backend Development
```bash
cd api
poetry install
poetry run server          # Start Django server
poetry run worker          # Start Celery worker
poetry run migrate         # Run database migrations
poetry run createsuperuser # Create admin user
```

### Frontend Development
```bash
cd frontend
npm install
npm run dev               # Start development server
npm run build             # Build for production
npm run lint              # Run ESLint
```

### Docker Development
```bash
docker-compose up -d              # Start all services
docker-compose logs -f            # View logs
docker-compose down              # Stop all services
docker-compose exec django bash   # Access Django container
docker-compose exec react bash    # Access React container
```

## ⚙️ Configuration

Key environment variables in `.env`:

```ini
# Django Core
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
DATABASE_URL=postgres://postgres:password@db:5432/littlesigns

# Cloudflare R2 Storage
R2_ACCESS_KEY_ID=your-r2-access-key
R2_SECRET_ACCESS_KEY=your-r2-secret-key
R2_BUCKET_NAME=littlesigns-media
R2_CUSTOM_DOMAIN=storage.littlesigns.co.zw

# Frontend
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

## 🧪 Testing

### Backend Tests
```bash
cd api
poetry run test            # Run all tests
poetry run test app.name   # Run specific app tests
poetry run coverage        # Run with coverage report
```

### Frontend Tests
```bash
cd frontend
npm test                   # Run frontend tests
```

## 📚 Documentation

- [API Documentation](./api/API_DOCUMENTATION.md)
- [Migration Guide](./api/MIGRATION_GUIDE.md)
- [Security Guidelines](./api/SECURITY.md)
- [Project URLs](./api/PROJECT_URLS.py)

## 🤝 Contributing

We welcome contributions from:

- **Developers**: Improve accessibility features and add new functionality
- **Linguists**: Expand sign language content and translations
- **Designers**: Enhance UI for diverse users
- **AI Engineers**: Contribute to our AI-powered learning solutions

### Contribution Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Pull Request Guidelines

- Include clear description of changes
- Add screenshots for UI changes
- Ensure accessibility compliance
- Include tests for new features
- Update documentation as needed

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots if applicable

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.txt](./api/LICENSE.txt) file for details.

## 🌐 Connect

- **Website**: [https://www.littlesigns.co.zw/](https://www.littlesigns.co.zw/)
- **Community Forum**: [GitHub Discussions](https://github.com/Little-Signs/Little-Signs/discussions)
- **Security**: security@littlesigns.org (for vulnerability reports)

## 🙏 Acknowledgments

- The deaf and hard-of-hearing community for their invaluable feedback
- Contributors who help make sign language education accessible
- Open source community for the tools and libraries that power this platform

---

<div align="center">
  <p>Made with ❤️ for the Little Signs community</p>
  <p>© 2023 Little Signs. All rights reserved.</p>
</div>
