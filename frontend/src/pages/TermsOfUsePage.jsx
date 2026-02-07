import React from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const TermsOfUsePage = () => {
  return (
    <>
      <Header />
      <ContentHeader title="Terms of Use" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-12'>

            {/* Introduction */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Terms of Use</div>
              <section className='cws_widget_content'>
                <p><strong>Last Updated:</strong> February 2026</p>
                <p>
                  Welcome to Little Signs. These Terms of Use ("Terms") govern your access to and use of the Little Signs 
                  platform, including our website, applications, and all related services (collectively, the "Platform"). 
                  By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to these Terms, 
                  please do not use the Platform.
                </p>
                <div className='message_box notice-box'>
                  <div className='message_box_header'><i className='fa fa-info-circle'></i> Important Notice</div>
                  <p>Because our Platform is designed for children, a parent or legal guardian must agree to these Terms on behalf of any child user under the age of 18.</p>
                </div>
              </section>
            </section>

            {/* Eligibility */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Eligibility</div>
              <section className='cws_widget_content'>
                <p>The Platform is intended for use by children under the supervision of a parent or guardian. To create an account:</p>
                <ul>
                  <li>You must be a parent or legal guardian of the child who will use the Platform, or an authorised educator.</li>
                  <li>You must be at least 18 years of age to create an account.</li>
                  <li>Children under 13 may only use the Platform with verified parental consent.</li>
                  <li>You must provide accurate and complete registration information.</li>
                </ul>
              </section>
            </section>

            {/* Account Responsibilities */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Account Responsibilities</div>
              <section className='cws_widget_content'>
                <p>As an account holder, you are responsible for:</p>
                <ul>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Supervising your child's use of the Platform as appropriate for their age</li>
                  <li>Ensuring that all information provided is accurate and up to date</li>
                  <li>Notifying us immediately of any unauthorised use of your account</li>
                </ul>
              </section>
            </section>

            {/* Acceptable Use */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Acceptable Use</div>
              <section className='cws_widget_content'>
                <p>When using the Platform, you and your child agree to:</p>
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box success-box'>
                      <div className='message_box_header'><i className='fa fa-check'></i> Permitted Uses</div>
                      <p>
                        Use the Platform for its intended educational purpose of learning sign language. 
                        Engage respectfully with other users and the community. Follow all applicable laws and regulations.
                      </p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box warning-box'>
                      <div className='message_box_header'><i className='fa fa-times'></i> Prohibited Uses</div>
                      <p>
                        Do not use the Platform to harass, bully, or harm others. Do not attempt to access other users' accounts. 
                        Do not upload inappropriate, harmful, or illegal content. Do not attempt to circumvent security measures.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* Intellectual Property */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Intellectual Property</div>
              <section className='cws_widget_content'>
                <p>
                  All content on the Platform, including but not limited to text, graphics, images, videos, sign language demonstrations, 
                  logos, and software, is the property of Little Signs or its licensors and is protected by copyright, trademark, and 
                  other intellectual property laws.
                </p>
                <p>You may not:</p>
                <ul>
                  <li>Copy, modify, or distribute any content from the Platform without prior written consent</li>
                  <li>Use our trademarks or branding without authorisation</li>
                  <li>Reverse engineer, decompile, or disassemble any software used in the Platform</li>
                  <li>Use automated tools to scrape or extract content from the Platform</li>
                </ul>
              </section>
            </section>

            {/* Educational Content Disclaimer */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Educational Content Disclaimer</div>
              <section className='cws_widget_content'>
                <p>
                  The educational content provided on the Platform is designed to supplement, not replace, formal sign language education. 
                  While we strive for accuracy and quality in all our content:
                </p>
                <ul>
                  <li>Sign language may vary by region and community</li>
                  <li>Our content is not a substitute for professional speech therapy or specialised educational services</li>
                  <li>Learning outcomes may vary from child to child</li>
                  <li>We recommend consulting with qualified professionals for specific educational needs</li>
                </ul>
              </section>
            </section>

            {/* Limitation of Liability */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Limitation of Liability</div>
              <section className='cws_widget_content'>
                <p>
                  To the fullest extent permitted by law, Little Signs shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising out of or related to your use of the Platform. Our total liability 
                  shall not exceed the amount you have paid to us in the twelve (12) months preceding the claim.
                </p>
                <p>
                  The Platform is provided on an "as is" and "as available" basis. We make no warranties, express or implied, 
                  regarding the Platform's availability, accuracy, or fitness for a particular purpose.
                </p>
              </section>
            </section>

            {/* Termination */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Termination</div>
              <section className='cws_widget_content'>
                <p>We may suspend or terminate your account if:</p>
                <ul>
                  <li>You violate these Terms of Use</li>
                  <li>We are required to do so by law</li>
                  <li>We reasonably believe your conduct poses a risk to other users, particularly children</li>
                  <li>Your account has been inactive for an extended period</li>
                </ul>
                <p>You may terminate your account at any time by contacting us. Upon termination, your right to use the Platform will cease immediately, and we will delete your data in accordance with our Privacy Policy.</p>
              </section>
            </section>

            {/* Governing Law */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Governing Law</div>
              <section className='cws_widget_content'>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes arising 
                  from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.
                </p>
              </section>
            </section>

            {/* Changes to Terms */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Changes to These Terms</div>
              <section className='cws_widget_content'>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify registered users of any material changes 
                  via email and will post the updated Terms on this page. Your continued use of the Platform after changes are posted 
                  constitutes your acceptance of the revised Terms.
                </p>
              </section>
            </section>

            {/* Contact */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Contact Us</div>
              <section className='cws_widget_content'>
                <p>If you have any questions about these Terms, please contact us:</p>
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

export default TermsOfUsePage
