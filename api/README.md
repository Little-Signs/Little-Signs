# **Little Signs Web Platform**  

<div align="center">
  <img src="https://www.littlesigns.co.zw/static/img/logo/android-chrome-512x512.png" width="200" alt="Little Signs Logo">
  <p><em>Our mission is to bridge educational gaps by providing every child with accessible learning tools that support their unique journeys</em></p>
</div>

## **✨ Features**  
- **Django** backend for robust user management & content delivery  
- **Webpack** for modern, accessible frontend development  
- **Docker**-based development environment  
- **Celery** for background tasks (video processing, emails)  
- **WCAG-compliant** UI components out of the box  
- Preconfigured:  
  - **S3 storage** for sign language videos  
  - **Sentry** error monitoring  
  - **Automated testing** (pytest)  

---

## **🚀 Quick Start**  

### **1. Clone & Setup**  
```bash
git clone https://github.com/Little-Signs/Little-Signs.git
cd Little-Signs
cp .env.example .env  # Update with your keys
```

### **2. Run with Docker (Recommended)**  
```bash
echo "DATABASE_URL=postgres://little_signs@localhost:5432/little_signs" > .env.docker
docker-compose up
```
Visit **[http://localhost:8000](http://localhost:8000)**

### **Manual Setup**  
```bash
poetry install
cd assets && npm install

# Run in separate terminals:
poetry run server  # Django
poetry run worker  # Celery
npm run dev        # Webpack (live reload)
```

---

## **🧩 Project Structure**  
```
├── assets/              # Webpack frontend (JS/SCSS)
│   └── ../
|   
├── config/              # Django settings
├── apps/                # apps or modules

└── .env.example         # Configuration template
```

---

## **🔧 Key Commands**  

| Category       | Command                     | Description                          |
|----------------|----------------------------|--------------------------------------|
| **Docker**     | `docker-compose up -d`      | Start services in background         |
|                | `docker-compose logs -f`    | View service logs                   |
| **Django**     | `poetry run migrate`        | Run database migrations             |
|                | `poetry run createsuperuser`| Create admin account                |
| **Frontend**   | `npm run build_prod`        | Production-ready assets             |
|                | `npm run lint:js`           | Check JavaScript accessibility      |

---

## **⚙️ Configuration**  
Configure in `.env`:  
```ini
# Required
DATABASE_URL=postgres://user:pass@db:5432/little_signs
SECRET_KEY=your-django-secret-key

# Optional (AWS for video storage)
USE_S3_STORAGE=on
AWS_BUCKET_NAME=little-signs-videos
```

---

## **🤝 Contributing**  
We welcome contributions from:  
- **Developers**: Improve accessibility features  
- **Linguists**: Expand sign language content  
- **Designers**: Enhance UI for diverse users
- **AI Engineers**: Be part of the state of the art AI soulution

**Process**:  
1. Fork → Create branch (`feature/a11y-improvement`)  
2. Submit PR with:  
   - Description of changes  
   - Screenshots (if UI-related)  
   - Accessibility testing results  

---

## **📜 License**  
[MIT License](LICENSE) | © 2023 Little Signs  

---

### **🌐 Connect**  
- [Website](https://www.littlesigns.co.zw/)  
- [Community Forum](https://github.com/Little-Signs/Little-Signs/discussions/1)  
- security@littlesigns.org (for vulnerabilities)  
