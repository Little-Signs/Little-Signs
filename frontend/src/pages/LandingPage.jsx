import Header from '../components/landing/Header';
import MainContent from '../components/landing/MainContent';
import About from '../components/landing/About';
import Courses from '../components/landing/Courses';
import Footer from '../components/layout/Footer';

// Landing Page component
const LandingPage = () => (
  <>
    <Header />
    <MainContent />
    <About />
    <Courses />
    <div className="content_bottom_bg"></div>
    <Footer />
  </>
);

export default LandingPage;