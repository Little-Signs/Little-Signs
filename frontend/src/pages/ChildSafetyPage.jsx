import React from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const ChildSafetyPage = () => {
  return (
    <>
      <Header />
      <ContentHeader title="Child Safety Policy" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-12'>

            {/* Introduction */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Child Safety Policy (COPPA Compliance)</div>
              <section className='cws_widget_content'>
                <p><strong>Last Updated:</strong> February 2026</p>
                <p>
                  Little Signs is committed to providing a safe online environment for children. This Child Safety Policy 
                  outlines the measures we take to protect children who use our platform, in compliance with the Children's 
                  Online Privacy Protection Act (COPPA), the Protection of Personal Information Act (POPIA), and other 
                  applicable child protection regulations.
                </p>
                <div className='message_box success-box'>
                  <div className='message_box_header'><i className='fa fa-heart'></i> Our Promise</div>
                  <p>Every child deserves a safe space to learn. We are dedicated to creating an environment where children can explore sign language without risk to their safety, privacy, or wellbeing.</p>
                </div>
              </section>
            </section>

            {/* Age-Appropriate Design */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Age-Appropriate Design</div>
              <section className='cws_widget_content'>
                <p>Our platform is designed with children's developmental needs in mind:</p>
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-4'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-child'></i> Child-Friendly Interface</div>
                      <p>Our interface uses clear, simple language and visual cues appropriate for young learners. Navigation is intuitive and designed for children's motor skills.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-4'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-filter'></i> Content Filtering</div>
                      <p>All content is reviewed and filtered to ensure it is age-appropriate, educational, and free from harmful or inappropriate material.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-4'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-ban'></i> No Harmful Features</div>
                      <p>We do not include features that could be harmful to children, such as in-app purchases, manipulative design patterns, or addictive mechanics.</p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* Parental Verification */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Parental Consent and Verification</div>
              <section className='cws_widget_content'>
                <p>We require verifiable parental consent before collecting any personal information from children under 13:</p>
                <ul>
                  <li><strong>Account Creation:</strong> Only parents or guardians can create accounts for children.</li>
                  <li><strong>Consent Verification:</strong> We use appropriate methods to verify that consent is provided by a parent or guardian.</li>
                  <li><strong>Ongoing Control:</strong> Parents maintain full control over their child's account and can review, modify, or delete information at any time.</li>
                  <li><strong>Consent Withdrawal:</strong> Parents can withdraw consent at any time, and we will promptly delete the child's information.</li>
                </ul>
              </section>
            </section>

            {/* Online Safety Measures */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Online Safety Measures</div>
              <section className='cws_widget_content'>
                <p>We implement comprehensive safety measures to protect children online:</p>
                <ul>
                  <li><strong>No Public Profiles:</strong> Children's profiles are not publicly visible. No personal information is displayed to other users.</li>
                  <li><strong>No Direct Messaging:</strong> Children cannot send or receive private messages from other users on the platform.</li>
                  <li><strong>No User-Generated Content Sharing:</strong> Children cannot post, share, or upload content that could be viewed by other users.</li>
                  <li><strong>No External Links:</strong> The learning environment does not contain links to external websites that are not part of our platform.</li>
                  <li><strong>No Advertising:</strong> We do not display third-party advertisements to children on our platform.</li>
                  <li><strong>No Location Tracking:</strong> We do not collect or track children's precise geographic location.</li>
                </ul>
              </section>
            </section>

            {/* Data Minimisation */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Data Minimisation</div>
              <section className='cws_widget_content'>
                <p>We follow strict data minimisation principles:</p>
                <ul>
                  <li>We collect only the minimum information necessary to provide our educational services</li>
                  <li>We do not require children to provide personal information beyond what is needed for the learning experience</li>
                  <li>We do not condition a child's participation on the collection of unnecessary personal information</li>
                  <li>We regularly review our data collection practices to ensure we are not collecting more than necessary</li>
                </ul>
              </section>
            </section>

            {/* Reporting and Response */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Reporting and Incident Response</div>
              <section className='cws_widget_content'>
                <p>We take all safety concerns seriously and have established clear procedures for reporting and responding to incidents:</p>
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box warning-box'>
                      <div className='message_box_header'><i className='fa fa-exclamation-triangle'></i> How to Report a Concern</div>
                      <p>
                        If you have any safety concerns about our platform or believe a child's safety has been compromised, 
                        please contact us immediately at <strong>safety@littlesigns.co.zw</strong>. We treat all reports with 
                        the utmost urgency and confidentiality.
                      </p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box question-box'>
                      <div className='message_box_header'><i className='fa fa-clock-o'></i> Our Response</div>
                      <p>
                        We aim to acknowledge all safety reports within 24 hours and take immediate action to investigate 
                        and resolve any issues. We will keep reporting parties informed of the outcome where appropriate.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* Staff and Moderation */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Staff Training and Content Moderation</div>
              <section className='cws_widget_content'>
                <ul>
                  <li><strong>Background Checks:</strong> All staff members who have access to children's data undergo thorough background checks.</li>
                  <li><strong>Training:</strong> Our team receives regular training on child safety, data protection, and recognising and responding to potential risks.</li>
                  <li><strong>Content Review:</strong> All educational content is reviewed by qualified educators and child safety experts before being published.</li>
                  <li><strong>Ongoing Monitoring:</strong> We continuously monitor our platform for any safety issues or vulnerabilities.</li>
                </ul>
              </section>
            </section>

            {/* Third-Party Services */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Third-Party Services</div>
              <section className='cws_widget_content'>
                <p>
                  We carefully vet all third-party services used in connection with our platform to ensure they meet our 
                  child safety standards. Third-party service providers are contractually required to:
                </p>
                <ul>
                  <li>Comply with all applicable child protection laws</li>
                  <li>Maintain appropriate security measures</li>
                  <li>Use children's data only for the purposes we specify</li>
                  <li>Delete children's data when it is no longer needed</li>
                </ul>
              </section>
            </section>

            {/* Contact */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Contact Our Safety Team</div>
              <section className='cws_widget_content'>
                <p>For any child safety concerns or questions about this policy:</p>
                <ul>
                  <li><strong>General Enquiries:</strong> info@littlesigns.co.zw</li>
                
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

export default ChildSafetyPage
