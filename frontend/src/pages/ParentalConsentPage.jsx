import React from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const ParentalConsentPage = () => {
  return (
    <>
      <Header />
      <ContentHeader title="Parental Consent Policy" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-12'>

            {/* Introduction */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Parental Consent Policy</div>
              <section className='cws_widget_content'>
                <p><strong>Last Updated:</strong> February 2026</p>
                <p>
                  At Little Signs, we recognise that parents and guardians play a vital role in their children's online safety 
                  and education. This Parental Consent Policy explains how we obtain, manage, and respect parental consent for 
                  children using our platform.
                </p>
                <div className='message_box success-box'>
                  <div className='message_box_header'><i className='fa fa-users'></i> Parents Come First</div>
                  <p>No child can use our platform without verified parental or guardian consent. We believe parents should always be informed and in control of their child's online learning experience.</p>
                </div>
              </section>
            </section>

            {/* Why We Require Consent */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Why We Require Parental Consent</div>
              <section className='cws_widget_content'>
                <p>Parental consent is required because:</p>
                <ul>
                  <li>Our platform is designed for children, many of whom are under the age of 13</li>
                  <li>We collect limited personal information to provide our educational services</li>
                  <li>Applicable laws, including COPPA and POPIA, require verifiable parental consent before collecting information from children</li>
                  <li>We believe parents should be active participants in their child's digital learning journey</li>
                </ul>
              </section>
            </section>

            {/* How We Obtain Consent */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>How We Obtain Consent</div>
              <section className='cws_widget_content'>
                <p>We use the following methods to obtain and verify parental consent:</p>
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-4'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-envelope'></i> Step 1: Registration</div>
                      <p>A parent or guardian must create the account using their own email address. Children cannot create accounts independently.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-4'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-check-square-o'></i> Step 2: Verification</div>
                      <p>We verify the parent's identity through email confirmation and may use additional verification methods for sensitive data collection.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-4'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-thumbs-up'></i> Step 3: Consent</div>
                      <p>Parents must explicitly agree to our Privacy Policy and Terms of Use, and provide specific consent for data collection related to their child.</p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* What Parents Consent To */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>What Parents Consent To</div>
              <section className='cws_widget_content'>
                <p>When providing consent, parents agree to the following:</p>
                <ul>
                  <li><strong>Account Creation:</strong> Collection of the child's first name or nickname and age range to create a learning profile.</li>
                  <li><strong>Learning Data:</strong> Collection of learning progress data to personalise the educational experience and track achievements.</li>
                  <li><strong>Technical Data:</strong> Collection of limited technical data (device type, browser) to ensure the platform functions correctly.</li>
                  <li><strong>Communication:</strong> Receiving updates about the child's learning progress and important platform announcements (sent to the parent's email only).</li>
                </ul>
                <div className='message_box question-box' style={{ marginTop: '20px' }}>
                  <div className='message_box_header'><i className='fa fa-info-circle'></i> Granular Consent</div>
                  <p>Parents can choose which optional features to enable for their child. Essential data collection for platform functionality is required, but optional features like personalised recommendations can be individually controlled.</p>
                </div>
              </section>
            </section>

            {/* Parental Rights */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Your Rights as a Parent or Guardian</div>
              <section className='cws_widget_content'>
                <p>As a parent or guardian, you have the following rights at any time:</p>
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box success-box'>
                      <div className='message_box_header'><i className='fa fa-eye'></i> Access and Review</div>
                      <p>You can review all personal information we have collected about your child, including learning progress data and account details.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box success-box'>
                      <div className='message_box_header'><i className='fa fa-pencil'></i> Modify and Update</div>
                      <p>You can update or correct any information associated with your child's account at any time through your parent dashboard.</p>
                    </div>
                  </div>
                </div>
                <div className='grid-row clearfix' style={{ marginTop: '20px' }}>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box warning-box'>
                      <div className='message_box_header'><i className='fa fa-trash'></i> Delete</div>
                      <p>You can request the complete deletion of your child's account and all associated data. We will process deletion requests within 30 days.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box warning-box'>
                      <div className='message_box_header'><i className='fa fa-times-circle'></i> Withdraw Consent</div>
                      <p>You can withdraw your consent at any time. Upon withdrawal, we will stop collecting data and delete existing information as requested.</p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* Educator and School Consent */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Educator and School Use</div>
              <section className='cws_widget_content'>
                <p>
                  When Little Signs is used in an educational setting (schools, tutoring centres, etc.), the school or 
                  educational institution may provide consent on behalf of parents for the sole purpose of educational use, 
                  in accordance with applicable laws. In such cases:
                </p>
                <ul>
                  <li>The educational institution assumes responsibility for obtaining necessary parental permissions</li>
                  <li>Data collected is used solely for educational purposes within the institution's programme</li>
                  <li>Parents retain all rights to access, review, and delete their child's information</li>
                  <li>We provide schools with tools to manage student accounts and data appropriately</li>
                </ul>
              </section>
            </section>

            {/* How to Exercise Rights */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>How to Exercise Your Rights</div>
              <section className='cws_widget_content'>
                <p>You can exercise your parental rights in the following ways:</p>
                <ul>
                  <li><strong>Parent Dashboard:</strong> Log in to your account and access the parent dashboard to review and manage your child's information.</li>
                  <li><strong>Email:</strong> Send a request to <strong> info@littlesigns.co.zw</strong> and we will respond within 48 hours.</li>
                  <li><strong>Contact Form:</strong> Use our contact page to submit a request.</li>
                </ul>
                <p style={{ marginTop: '15px' }}>We may need to verify your identity before processing certain requests to protect your child's information from unauthorised access.</p>
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

export default ParentalConsentPage
