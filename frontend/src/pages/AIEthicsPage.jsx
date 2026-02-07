import React from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const AIEthicsPage = () => {
  return (
    <>
      <Header />
      <ContentHeader title="AI Ethics Statement" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-12'>

            {/* Introduction */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>AI Ethics Statement</div>
              <section className='cws_widget_content'>
                <p><strong>Last Updated:</strong> February 2026</p>
                <p>
                  At Little Signs, we are committed to the ethical and responsible use of artificial intelligence in our 
                  educational platform. We believe that AI should enhance, not replace, human connection in the learning process. 
                  This statement outlines our principles, commitments, and practices regarding AI use on our platform, 
                  with special attention to the safety and wellbeing of children.
                </p>
              </section>
            </section>

            {/* Our AI Principles */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Our AI Principles</div>
              <section className='cws_widget_content'>
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box success-box'>
                      <div className='message_box_header'><i className='fa fa-shield'></i> Child Safety First</div>
                      <p>All AI systems are designed with child safety as the highest priority, ensuring age-appropriate interactions, content filtering, and protection from harmful outputs.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-eye'></i> Transparency</div>
                      <p>We are transparent about how AI is used in our platform and provide clear explanations of AI-driven features to parents, educators, and age-appropriate explanations to children.</p>
                    </div>
                  </div>
                </div>
                <div className='grid-row clearfix' style={{ marginTop: '20px' }}>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box question-box'>
                      <div className='message_box_header'><i className='fa fa-users'></i> Human-Centred Design</div>
                      <p>Our AI tools are designed to support and enhance human teaching, not replace the valuable role of parents, educators, and sign language professionals.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box warning-box'>
                      <div className='message_box_header'><i className='fa fa-lock'></i> Privacy and Data Protection</div>
                      <p>We strictly protect children's privacy and ensure all AI systems comply with the highest standards of data protection, minimising data collection and processing.</p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* How We Use AI */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>How We Use AI</div>
              <section className='cws_widget_content'>
                <p>AI is used on our platform in the following carefully considered ways:</p>
                <ul>
                  <li><strong>Personalised Learning Paths:</strong> AI helps adapt learning content to each child's pace and level, ensuring an optimal educational experience.</li>
                  <li><strong>Progress Tracking:</strong> AI assists in monitoring learning progress and identifying areas where a child may need additional support.</li>
                  <li><strong>Interactive Demonstrations:</strong> AI-powered features help demonstrate sign language gestures and provide feedback on practice exercises.</li>
                  <li><strong>Content Recommendations:</strong> AI suggests relevant learning materials based on a child's interests and progress.</li>
                  <li><strong>Accessibility Features:</strong> AI helps make our platform more accessible to children with different abilities and learning styles.</li>
                </ul>
              </section>
            </section>

            {/* AI Safety Measures */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>AI Safety Measures for Children</div>
              <section className='cws_widget_content'>
                <p>We implement rigorous safety measures to protect children when they interact with AI features:</p>
                <ul>
                  <li><strong>Content Filtering:</strong> All AI-generated content passes through multiple safety filters to ensure it is age-appropriate and free from harmful material.</li>
                  <li><strong>No Direct AI Chat:</strong> Children do not interact directly with generative AI chatbots. All AI interactions are structured and controlled.</li>
                  <li><strong>Human Oversight:</strong> AI outputs are regularly reviewed by our team of educators and child safety experts.</li>
                  <li><strong>Bias Monitoring:</strong> We actively monitor our AI systems for biases related to disability, race, gender, culture, and other factors to ensure fair and inclusive experiences.</li>
                  <li><strong>Limited Data Use:</strong> AI systems use the minimum amount of data necessary and never process sensitive personal information beyond what is needed for educational purposes.</li>
                </ul>
              </section>
            </section>

            {/* Fairness and Inclusion */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Fairness and Inclusion</div>
              <section className='cws_widget_content'>
                <p>We are committed to ensuring our AI systems are fair and inclusive:</p>
                <ul>
                  <li>Our AI models are tested across diverse populations to minimise bias</li>
                  <li>We consider the cultural context of Zimbabwe and the broader African continent in our AI development</li>
                  <li>We ensure our AI systems do not discriminate based on a child's hearing ability, learning pace, or background</li>
                  <li>We actively seek feedback from diverse communities, including the deaf and hard-of-hearing community</li>
                  <li>We regularly audit our AI systems for unintended biases and take corrective action when issues are identified</li>
                </ul>
              </section>
            </section>

            {/* Accountability */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Accountability and Governance</div>
              <section className='cws_widget_content'>
                <p>We maintain strong governance over our AI systems:</p>
                <ul>
                  <li><strong>Regular Audits:</strong> We conduct regular audits of our AI systems to ensure they align with our ethical principles and educational mission.</li>
                  <li><strong>Expert Review:</strong> We work with experts in child development, sign language education, AI ethics, and data protection to review our practices.</li>
                  <li><strong>Incident Response:</strong> We have clear procedures for identifying, reporting, and addressing any AI-related issues or concerns.</li>
                  <li><strong>Continuous Improvement:</strong> We continuously update our AI ethics practices as technology and best practices evolve.</li>
                </ul>
              </section>
            </section>

            {/* Parental Controls */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Parental Controls and AI</div>
              <section className='cws_widget_content'>
                <p>Parents and guardians have control over AI features:</p>
                <ul>
                  <li>Parents can review how AI is being used in their child's learning experience</li>
                  <li>Parents can opt out of certain AI-driven features if they prefer</li>
                  <li>Parents can request information about how AI has been used with their child's data</li>
                  <li>Parents can contact us with any concerns about AI use on the platform</li>
                </ul>
              </section>
            </section>

            {/* Contact */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Questions or Concerns</div>
              <section className='cws_widget_content'>
                <p>If you have any questions or concerns about our use of AI, please contact us:</p>
                <ul>
                  <li><strong>Email:</strong> info@littlesigns.co.zw</li>
                </ul>
                <a href='/contact' className='cws_button large custom_color' style={{ background: '#f2a1b0', color: '#fff', marginTop: '10px' }}>
                  Contact Us
                  <i className='button-icon fa fa-envelope' style={{ color: '#fff' }}></i>
                </a>
              </section>
            </section>

          </div>
        </div>
      </ContentSection>
      <Footer />
    </>
  )
}

export default AIEthicsPage
