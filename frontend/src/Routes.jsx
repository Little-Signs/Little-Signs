import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import LearnPage from './pages/LearnPage'
import ResourcesPage from './pages/ResourcesPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default AppRoutes
