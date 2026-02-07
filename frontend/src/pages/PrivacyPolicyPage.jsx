import React from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <ContentHeader title="Privacy Policy" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-12'>

            {/* Introduction */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Privacy Policy</div>
              <section className='cws_widget_content'>
                <p><strong>Last Updated:</strong> February 2026</p>
                <p>
                  At Little Signs, we are deeply committed to protecting the privacy and safety of children who use our platform. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard information when you or your child 
                  visits our website and uses our services. Because our platform is designed for children, we take extra care to 
                  comply with applicable children's privacy laws, including the Children's Online Privacy Protection Act (COPPA) 
                  and similar regulations.
                </p>
                <div className='message_box success-box'>
                  <div className='message_box_header'><i className='fa fa-shield'></i> Our Commitment</div>
                  <p>We never sell children's personal information. We collect only what is necessary to provide a safe, educational experience.</p>
                </div>
              </section>
            </section>

            {/* Information We Collect */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Information We Collect</div>
              <section className='cws_widget_content'>
                <h3>Information Provided by Parents or Guardians</h3>
                <p>We may collect the following information when a parent or guardian creates an account on behalf of a child:</p>
                <ul>
                  <li>Parent/guardian name and email address</li>
                  <li>Child's first name or nickname (we do not require a child's full name)</li>
                  <li>Child's age or age range</li>
                  <li>Account login credentials</li>
                </ul>

                <h3>Information Collected Automatically</h3>
                <p>When your child uses our platform, we may automatically collect limited technical information:</p>
                <ul>
                  <li>Device type and browser information</li>
                  <li>General location (country/region level only, never precise location)</li>
                  <li>Learning progress and activity within the platform</li>
                  <li>Session duration and pages visited</li>
                </ul>

                <h3>Information We Do NOT Collect from Children</h3>
                <div className='message_box warning-box'>
                  <div className='message_box_header'><i className='fa fa-ban'></i> We Never Collect</div>
                  <p>
                    We do not collect precise geolocation data, photographs, videos, audio recordings, or any biometric data from children. 
                    We do not allow children to make their personal information publicly available. We do not require children to provide 
                    more information than is reasonably necessary to participate in our learning activities.
                  </p>
                </div>
              </section>
            </section>

            {/* How We Use Information */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>How We Use Information</div>
              <section className='cws_widget_content'>
                <p>We use the information we collect solely for the following purposes:</p>
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-graduation-cap'></i> Educational Purposes</div>
                      <p>To provide personalised sign language learning experiences, track learning progress, and adapt content to your child's level.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-cog'></i> Platform Operations</div>
                      <p>To maintain and improve our platform, ensure security, provide customer support, and communicate with parents about their child's account.</p>
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: '20px' }}>We do <strong>not</strong> use children's information for advertising, marketing, or any commercial purpose unrelated to the educational services we provide.</p>
              </section>
            </section>

            {/* Data Sharing and Disclosure */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Data Sharing and Disclosure</div>
              <section className='cws_widget_content'>
                <p>We do not sell, trade, or rent children's personal information to third parties. We may share information only in the following limited circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> With trusted service providers who assist us in operating our platform, subject to strict confidentiality agreements and data protection requirements.</li>
                  <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                  <li><strong>Safety:</strong> When we believe disclosure is necessary to protect the safety of a child or the public.</li>
                  <li><strong>With Parental Consent:</strong> In any other circumstance, only with verified parental consent.</li>
                </ul>
              </section>
            </section>

            {/* Data Security */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Data Security</div>
              <section className='cws_widget_content'>
                <p>We implement appropriate technical and organisational measures to protect children's personal information, including:</p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls limiting who can view personal information</li>
                  <li>Secure data storage with regular backups</li>
                  <li>Employee training on data protection and child safety</li>
                </ul>
              </section>
            </section>

            {/* Parental Rights */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Parental Rights</div>
              <section className='cws_widget_content'>
                <p>As a parent or guardian, you have the right to:</p>
                <ul>
                  <li>Review the personal information we have collected about your child</li>
                  <li>Request that we delete your child's personal information</li>
                  <li>Refuse to allow any further collection or use of your child's information</li>
                  <li>Agree to the collection and use of your child's information without consenting to its disclosure to third parties</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <strong>privacy@littlesigns.co.zw</strong>.</p>
              </section>
            </section>

            {/* Data Retention */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Data Retention</div>
              <section className='cws_widget_content'>
                <p>
                  We retain children's personal information only for as long as necessary to fulfil the purposes for which it was collected, 
                  or as required by law. When an account is deleted, we will remove all associated personal information within 30 days, 
                  except where retention is required by law.
                </p>
              </section>
            </section>

            {/* Changes to This Policy */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Changes to This Policy</div>
              <section className='cws_widget_content'>
                <p>
                  We may update this Privacy Policy from time to time. We will notify parents of any material changes by email 
                  and will post the updated policy on this page with a revised "Last Updated" date. We encourage parents to review 
                  this policy periodically.
                </p>
              </section>
            </section>

            {/* Contact Us */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Contact Us</div>
              <section className='cws_widget_content'>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
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

export default PrivacyPolicyPage
