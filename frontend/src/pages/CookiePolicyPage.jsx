import React from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const CookiePolicyPage = () => {
  return (
    <>
      <Header />
      <ContentHeader title="Cookie Policy" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-12'>

            {/* Introduction */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Cookie Policy</div>
              <section className='cws_widget_content'>
                <p><strong>Last Updated:</strong> February 2026</p>
                <p>
                  This Cookie Policy explains how Little Signs uses cookies and similar technologies on our platform. 
                  Because our platform is designed for children, we take a minimal and privacy-first approach to cookie usage.
                </p>
              </section>
            </section>

            {/* What Are Cookies */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>What Are Cookies?</div>
              <section className='cws_widget_content'>
                <p>
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used 
                  to make websites work more efficiently and to provide information to the website owners. Cookies help us 
                  remember your preferences and improve your experience on our platform.
                </p>
              </section>
            </section>

            {/* How We Use Cookies */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>How We Use Cookies</div>
              <section className='cws_widget_content'>
                <p>We use only essential and functional cookies on our platform. We do <strong>not</strong> use advertising or tracking cookies.</p>
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box success-box'>
                      <div className='message_box_header'><i className='fa fa-check-circle'></i> Essential Cookies</div>
                      <p>
                        These cookies are necessary for the platform to function properly. They enable core features such as 
                        user authentication, session management, and security. Without these cookies, the platform cannot operate.
                      </p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-cog'></i> Functional Cookies</div>
                      <p>
                        These cookies allow us to remember your preferences (such as language settings) and provide enhanced 
                        features. They help us personalise the learning experience for your child.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            {/* Cookies We Use */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Specific Cookies We Use</div>
              <section className='cws_widget_content'>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f5f5f5' }}>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Cookie Name</th>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Type</th>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Purpose</th>
                      <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>session_id</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Essential</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Maintains your login session</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Session</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>csrf_token</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Essential</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Protects against cross-site request forgery</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Session</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>language_pref</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Functional</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Remembers your language preference</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>1 year</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>learning_progress</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Functional</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Stores learning session progress locally</td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>30 days</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </section>

            {/* What We Don't Use */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Cookies We Do NOT Use</div>
              <section className='cws_widget_content'>
                <div className='message_box warning-box'>
                  <div className='message_box_header'><i className='fa fa-ban'></i> No Tracking or Advertising Cookies</div>
                  <p>
                    As a children's platform, we do <strong>not</strong> use:
                  </p>
                </div>
                <ul style={{ marginTop: '15px' }}>
                  <li>Third-party advertising cookies</li>
                  <li>Behavioural tracking cookies</li>
                  <li>Social media tracking cookies</li>
                  <li>Cross-site tracking technologies</li>
                  <li>Any cookies that profile children for marketing purposes</li>
                </ul>
              </section>
            </section>

            {/* Managing Cookies */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Managing Cookies</div>
              <section className='cws_widget_content'>
                <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
                <ul>
                  <li>View what cookies are stored on your device</li>
                  <li>Delete individual or all cookies</li>
                  <li>Block cookies from specific or all websites</li>
                  <li>Set preferences for certain types of cookies</li>
                </ul>
                <p style={{ marginTop: '15px' }}>
                  <strong>Please note:</strong> Disabling essential cookies may prevent you from using certain features of our platform, 
                  such as logging in to your account.
                </p>
              </section>
            </section>

            {/* Contact */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Contact Us</div>
              <section className='cws_widget_content'>
                <p>If you have any questions about our use of cookies, please contact us:</p>
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

export default CookiePolicyPage
