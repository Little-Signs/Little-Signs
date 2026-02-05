import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('learning')

  const tabs = [
    { id: 'learning', label: 'Learning Materials' },
    { id: 'parents', label: 'Parent Guide' },
    { id: 'videos', label: 'Video Tutorials' },
    { id: 'community', label: 'Community' }
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
                  {activeTab === 'learning' && (
                    <div className='tab_item'>
                      <h2>Learning Materials</h2>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-book'></i> Alphabet Signs</div>
                            <p>Complete A-Z sign language alphabet with visual guides and practice exercises.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box notice-box'>
                            <div className='message_box_header'><i className='fa fa-sort-numeric-asc'></i> Numbers</div>
                            <p>Learn numbers 1-100 with interactive counting games and activities.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box question-box'>
                            <div className='message_box_header'><i className='fa fa-comments'></i> Common Phrases</div>
                            <p>Essential everyday phrases for basic communication needs.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3>Advanced Learning</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box alert-box'>
                            <div className='message_box_header'><i className='fa fa-heart'></i> Emotions & Feelings</div>
                            <p>Express emotions through sign language with detailed visual guides.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box warning-box'>
                            <div className='message_box_header'><i className='fa fa-home'></i> Family & Home</div>
                            <p>Signs for family members, household items, and daily routines.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3>Downloadable Resources</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-3'>
                          <a href='#' className='cws_button custom_color' style={{ background: '#f2a1b0', color: '#fff' }}>
                            <i className='button-icon fa fa-download'></i> Alphabet Chart
                          </a>
                        </div>
                        <div className='grid-col grid-col-3'>
                          <a href='#' className='cws_button custom_color' style={{ background: '#8ddd67', color: '#fff' }}>
                            <i className='button-icon fa fa-download'></i> Number Cards
                          </a>
                        </div>
                        <div className='grid-col grid-col-3'>
                          <a href='#' className='cws_button custom_color' style={{ background: '#e4405f', color: '#fff' }}>
                            <i className='button-icon fa fa-download'></i> Phrase Book
                          </a>
                        </div>
                        <div className='grid-col grid-col-3'>
                          <a href='#' className='cws_button custom_color' style={{ background: '#ffdb5e', color: '#fff' }}>
                            <i className='button-icon fa fa-download'></i> Practice Sheets
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

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

                  {activeTab === 'community' && (
                    <div className='tab_item'>
                      <h2>Community Resources</h2>
                      <p>Join our vibrant community of learners, educators, and families passionate about sign language education in Zimbabwe.</p>
                      
                      <h3>Community Features</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-comments'></i> Discussion Forums</div>
                            <p>Connect with other learners, ask questions, and share experiences.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box notice-box'>
                            <div className='message_box_header'><i className='fa fa-calendar'></i> Events & Workshops</div>
                            <p>Join online and in-person events across Zimbabwe.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box question-box'>
                            <div className='message_box_header'><i className='fa fa-trophy'></i> Achievement Badges</div>
                            <p>Earn recognition for your learning milestones and progress.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3>Support Networks</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box alert-box'>
                            <div className='message_box_header'><i className='fa fa-user-md'></i> Expert Support</div>
                            <p>Get help from certified sign language instructors and speech therapists.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box warning-box'>
                            <div className='message_box_header'><i className='fa fa-handshake-o'></i> Peer Mentoring</div>
                            <p>Connect with experienced learners for guidance and encouragement.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3>Get Involved</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-12'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-heart'></i> Volunteer Opportunities</div>
                            <p>Help us expand our reach by volunteering as a community moderator, content creator, or local ambassador in your area.</p>
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
