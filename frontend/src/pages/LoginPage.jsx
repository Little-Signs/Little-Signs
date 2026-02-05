import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const LoginPage = () => (
  <>
    <Header />
    <ContentHeader title="Login" />
    <ContentSection>
      <h1>Login</h1>
      <p>Sign in to access your personalized learning experience.</p>
    </ContentSection>
    <Footer />
  </>
)

export default LoginPage
