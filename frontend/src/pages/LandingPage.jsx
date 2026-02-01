import Header from '../components/landing/Header';
import MainContent from '../components/landing/MainContent';
import About from '../components/landing/About';
import Courses from '../components/landing/Courses';
import Footer from '../components/layout/Footer';
import ContentSection from '../components/layout/ContentSection';

// Landing Page component
const LandingPage = () => (
  <>
    <Header />
    <MainContent />
    <ContentSection>
    <About />
    <Courses/>
   
    </ContentSection>
    
    <Footer />
  </>
);

export default LandingPage;