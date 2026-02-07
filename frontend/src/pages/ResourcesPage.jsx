import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('parents')

  const tabs = [
    { id: 'parents', label: 'Parent Guide' },
    { id: 'videos', label: 'Video Tutorials' }
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

                  {activeTab === 'videos' && (
                    <div className='tab_item'>
                      <h2>Video Tutorials</h2>
                      <p>Watch our comprehensive video library featuring expert instructors and real-world demonstrations.</p>
                      
                      <h3>Featured Video Series</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-play-circle'></i> Basic Signs</div>
                            <p>Foundation videos covering essential signs for beginners.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box notice-box'>
                            <div className='message_box_header'><i className='fa fa-video-camera'></i> Story Time</div>
                            <p>Interactive storytelling sessions using sign language.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box question-box'>
                            <div className='message_box_header'><i className='fa fa-music'></i> Songs & Rhymes</div>
                            <p>Musical videos combining signs with popular children's songs.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3>Video Categories</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-3'>
                          <div className='message_box alert-box'>
                            <div className='message_box_header'><i className='fa fa-graduation-cap'></i> Educational</div>
                            <p>Academic and learning-focused video content.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-3'>
                          <div className='message_box warning-box'>
                            <div className='message_box_header'><i className='fa fa-smile'></i> Entertainment</div>
                            <p>Fun and engaging videos for children.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-3'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-users'></i> Family</div>
                            <p>Videos designed for family learning activities.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-3'>
                          <div className='message_box notice-box'>
                            <div className='message_box_header'><i className='fa fa-certificate'></i> Advanced</div>
                            <p>Complex signs and conversational skills.</p>
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
