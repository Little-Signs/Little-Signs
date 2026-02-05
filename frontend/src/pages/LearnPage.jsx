import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const LearnPage = () => (
  <>
    <Header />
    <ContentHeader title="Learn" />
    <ContentSection>
      <h1>Learn Sign Language</h1>
      <p>Start your journey to learn sign language with our interactive lessons.</p>
    </ContentSection>
    <Footer />
  </>
)

export default LearnPage
