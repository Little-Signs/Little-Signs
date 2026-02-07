import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import LearnPage from './pages/LearnPage'
import ResourcesPage from './pages/ResourcesPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import PasswordResetRequestPage from './pages/PasswordResetRequestPage'
import PasswordResetPage from './pages/PasswordResetPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfUsePage from './pages/TermsOfUsePage'
import AIEthicsPage from './pages/AIEthicsPage'
import ChildSafetyPage from './pages/ChildSafetyPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import ParentalConsentPage from './pages/ParentalConsentPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
      <Route path="/password-reset" element={<PasswordResetRequestPage />} />
      <Route path="/reset-password/:token" element={<PasswordResetPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-use" element={<TermsOfUsePage />} />
      <Route path="/ai-ethics" element={<AIEthicsPage />} />
      <Route path="/child-safety" element={<ChildSafetyPage />} />
      <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      <Route path="/parental-consent" element={<ParentalConsentPage />} />
    </Routes>
  )
}

export default AppRoutes
