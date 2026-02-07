import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'
import { investorAPI } from '../services/api'

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('parents')
  const [pitchForm, setPitchForm] = useState({ email: '', name: '', organisation: '' })
  const [pitchSubmitting, setPitchSubmitting] = useState(false)
  const [pitchStatus, setPitchStatus] = useState('')

  const handlePitchChange = (e) => {
    setPitchForm({ ...pitchForm, [e.target.name]: e.target.value })
  }

  const handlePitchSubmit = async (e) => {
    e.preventDefault()
    setPitchSubmitting(true)
    setPitchStatus('')

    try {
      const data = await investorAPI.requestPitchDeck(pitchForm)
      if (data.success) {
        setPitchStatus('success')
        setPitchForm({ email: '', name: '', organisation: '' })
      } else {
        setPitchStatus('error')
      }
    } catch (error) {
      setPitchStatus('error')
    } finally {
      setPitchSubmitting(false)
    }
  }

  const tabs = [
    { id: 'parents', label: 'Parent Guide' },
    { id: 'investor', label: 'Investor Relations' }
  ]

  return (
    <>
      <Header />
      <ContentHeader title="Resources" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-12'>
            <section className='cws-widget'>
              <div className='widget-title'>Learning Resources</div>
              <section className='cws_widget_content tab_widget'>
                <div className='tabs'>
                  {tabs.map(tab => (
                    <a 
                      key={tab.id}
                      className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </a>
                  ))}
                </div>
                <div className='tab_items'>
                  
                  {activeTab === 'parents' && (
                    <div className='tab_item'>
                      <h2>Parent Guide</h2>
                      <p>Support your child's sign language journey with these comprehensive resources designed specifically for parents and caregivers.</p>
                      
                      <h3>Getting Started</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-rocket'></i> Beginner's Guide</div>
                            <p>Step-by-step introduction to teaching sign language to your child.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box notice-box'>
                            <div className='message_box_header'><i className='fa fa-clock'></i> Daily Routines</div>
                            <p>Integrate sign language into everyday activities and routines.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box question-box'>
                            <div className='message_box_header'><i className='fa fa-gamepad'></i> Fun Activities</div>
                            <p>Engaging games and activities to make learning enjoyable.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3>Developmental Tips</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box alert-box'>
                            <div className='message_box_header'><i className='fa fa-child'></i> Age-Appropriate Signs</div>
                            <p>Learn which signs are best for different developmental stages.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box warning-box'>
                            <div className='message_box_header'><i className='fa fa-chart-line'></i> Progress Tracking</div>
                            <p>Tools to monitor and celebrate your child's learning progress.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3>Support Resources</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-12'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-users'></i> Parent Community</div>
                            <p>Connect with other parents, share experiences, and get support from our community of sign language learners.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'investor' && (
                    <div className='tab_item'>
                      <h2>Investor Relations</h2>
                      <p>Interested in learning more about Little Signs and our mission to make sign language accessible to every child? Enter your details below to receive our pitch deck via email.</p>

                      {pitchStatus === 'success' && (
                        <div className='message_box success-box'>
                          <div className='message_box_header'><i className='fa fa-check-circle'></i> Success</div>
                          <p>Thank you! A download link for our pitch deck has been sent to your email.</p>
                        </div>
                      )}

                      {pitchStatus === 'error' && (
                        <div className='message_box alert-box'>
                          <div className='message_box_header'><i className='fa fa-exclamation-circle'></i> Error</div>
                          <p>Something went wrong. Please try again or contact us directly.</p>
                        </div>
                      )}

                      <form onSubmit={handlePitchSubmit} className="wpcf7-form contact-form">
                        <p>
                          <span className="wpcf7-form-control-wrap your-email" style={{ display: 'block', marginBottom: '20px' }}>
                            <input 
                              type="email" 
                              name="email" 
                              value={pitchForm.email}
                              onChange={handlePitchChange}
                              size="49" 
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" 
                              required 
                              placeholder="Your Email *" 
                            />
                          </span>
                          <span className="wpcf7-form-control-wrap your-name" style={{ display: 'block', marginBottom: '20px' }}>
                            <input 
                              type="text" 
                              name="name" 
                              value={pitchForm.name}
                              onChange={handlePitchChange}
                              size="49" 
                              className="wpcf7-form-control wpcf7-text" 
                              placeholder="Your Name (optional)" 
                            />
                          </span>
                          <span className="wpcf7-form-control-wrap your-organisation" style={{ display: 'block', marginBottom: '25px' }}>
                            <input 
                              type="text" 
                              name="organisation" 
                              value={pitchForm.organisation}
                              onChange={handlePitchChange}
                              size="49" 
                              className="wpcf7-form-control wpcf7-text" 
                              placeholder="Organisation (optional)" 
                            />
                          </span>
                          <input 
                            type="submit" 
                            value={pitchSubmitting ? "Sending..." : "Download Pitch Deck"} 
                            className="wpcf7-form-control wpcf7-submit" 
                            disabled={pitchSubmitting}
                          />
                        </p>
                      </form>

                      <h3>Why Invest?</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-line-chart'></i> Growing Market</div>
                            <p>The EdTech and accessibility market continues to expand rapidly.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box notice-box'>
                            <div className='message_box_header'><i className='fa fa-heart'></i> Social Impact</div>
                            <p>Bridging communication gaps for children and families across Africa.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box question-box'>
                            <div className='message_box_header'><i className='fa fa-lightbulb'></i> Innovation</div>
                            <p>Pioneering interactive sign language education through technology.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </section>
            </section>
          </div>
        </div>
      </ContentSection>
      <Footer />
    </>
  )
}

export default ResourcesPage
