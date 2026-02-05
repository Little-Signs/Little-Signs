import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission')
  const [activeAccordion, setActiveAccordion] = useState('panel1')

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'team', label: 'Our Team' },
    { id: 'history', label: 'Our History' },
    { id: 'values', label: 'Our Values' }
  ]

  const accordionPanels = [
    { 
      id: 'panel1', 
      title: 'What is Little Signs?', 
      icon: 'fa-question-circle',
      content: 'Little Signs is Zimbabwe\'s premier educational platform dedicated to making sign language accessible, engaging, and fun for children of all ages. We combine proven teaching methods with modern technology to create effective learning experiences that break down communication barriers.'
    },
    { 
      id: 'panel2', 
      title: 'Why Choose Little Signs?', 
      icon: 'fa-star',
      content: 'Our Zimbabwe-based approach combines local cultural understanding with international best practices in sign language education. We focus on visual learning, repetition, and positive reinforcement to ensure lasting language acquisition while respecting our local context.'
    },
    { 
      id: 'panel3', 
      title: 'Our Teaching Method', 
      icon: 'fa-graduation-cap',
      content: 'We use a multi-sensory approach that incorporates visual demonstrations, interactive exercises, and real-world practice scenarios. Our curriculum is designed by experienced educators and speech therapists to ensure developmental appropriateness and cultural relevance.'
    }
  ]

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: '/images/team/sarah.jpg',
      bio: 'Sarah is a certified speech-language pathologist with over 15 years of experience in deaf education. She founded Little Signs to bridge the communication gap between deaf and hearing communities.'
    },
    {
      name: 'Michael Johnson',
      role: 'Head of Curriculum',
      image: '/images/team/michael.jpg',
      bio: 'Michael brings extensive experience in educational technology and curriculum development. He ensures our content meets the highest educational standards while remaining engaging and effective.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Director',
      image: '/images/team/emily.jpg',
      bio: 'Emily leads our community outreach programs and partnerships with schools. She is passionate about making sign language education accessible to underserved communities.'
    }
  ]

  return (
    <>
      <Header />
      <ContentHeader title="About" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-12'>
            {/* Tabs Section */}
            <section className='cws-widget'>
              <div className='widget-title'>About Little Signs</div>
              <section className='cws_widget_content tab_widget'>
                <div className='tabs'>
                  {tabs.map(tab => (
                    <a 
                      key={tab.id}
                      className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                      role='tab'
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </a>
                  ))}
                </div>
                <div className='tab_items'>
                  {activeTab === 'mission' && (
                    <div className='tab_item' role='tabpanel'>
                      <h2>Our Mission</h2>
                      <p><strong>To empower every child</strong> in Zimbabwe and beyond with the gift of sign language through innovative, accessible, and engaging educational experiences that foster communication, inclusion, and cultural understanding.</p>
                      
                      <div className='grid-row clearfix' style={{ marginTop: '30px' }}>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box notice-box'>
                            <div className='message_box_header'><i className='fa fa-heart'></i> Accessibility</div>
                            <p>Making quality sign language education available to all children, regardless of background or ability.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box question-box'>
                            <div className='message_box_header'><i className='fa fa-lightbulb'></i> Innovation</div>
                            <p>Using cutting-edge technology and creative teaching methods to make learning fun and effective.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-4'>
                          <div className='message_box warning-box'>
                            <div className='message_box_header'><i className='fa fa-users'></i> Community</div>
                            <p>Building a supportive network across Zimbabwe of learners, families, and educators.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3>Our Vision</h3>
                      <p>A Zimbabwe where <strong>every child has the opportunity</strong> to learn sign language in a supportive, fun, and effective environment that prepares them for meaningful connections and opportunities in both deaf and hearing communities.</p>
                      
                      <h3>What We Offer</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-graduation-cap'></i> Expert-Led Curriculum</div>
                            <p>Developed by Zimbabwean educators and speech therapists to ensure cultural relevance and developmental appropriateness.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-mobile'></i> Mobile Learning</div>
                            <p>Access our platform anywhere, anytime on any device.</p>
                          </div>
                        </div>
                      </div>
                      
                      <h3>Our Core Values</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-3'>
                          <div className='message_box alert-box'>
                            <div className='message_box_header'><i className='fa fa-shield'></i> Safety First</div>
                            <p>Creating a secure, child-friendly learning environment.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-3'>
                          <div className='message_box question-box'>
                            <div className='message_box_header'><i className='fa fa-star'></i> Excellence</div>
                            <p>Delivering the highest quality educational content and experiences.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-3'>
                          <div className='message_box notice-box'>
                            <div className='message_box_header'><i className='fa fa-globe'></i> Cultural Respect</div>
                            <p>Honoring Zimbabwean sign language traditions and cultural context.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-3'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'><i className='fa fa-smile'></i> Joy in Learning</div>
                            <p>Making sign language education fun, engaging, and rewarding.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'team' && (
                    <div className='tab_item' role='tabpanel'>
                      <h2>Meet Our Team</h2>
                      <div className='grid-row clearfix'>
                        {teamMembers.map((member, index) => (
                          <div key={index} className='grid-col grid-col-4'>
                            <div className='cws-widget'>
                              <div className='widget-title'>{member.name}</div>
                              <section className='cws_widget_content'>
                                <img 
                                  src={member.image} 
                                  alt={member.name}
                                  className='alignleft size-thumbnail border'
                                  style={{ marginBottom: '15px' }}
                                />
                                <h4>{member.role}</h4>
                                <p>{member.bio}</p>
                              </section>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'history' && (
                    <div className='tab_item' role='tabpanel'>
                      <h2>Our History</h2>
                      <p>Founded in 2020, Little Signs began as a small project with a big dream: to make sign language education accessible to every child who needs it.</p>
                      
                      <h3>Our Journey</h3>
                      <ul>
                        <li><strong>2020:</strong> Launched our first online platform with 50 basic signs</li>
                        <li><strong>2021:</strong> Expanded to include 200+ signs and interactive games</li>
                        <li><strong>2022:</strong> Partnered with 10 schools across Zimbabwe</li>
                        <li><strong>2023:</strong> Developed mobile app and reached 10,000+ learners</li>
                        <li><strong>2024:</strong> Launched advanced curriculum and teacher training programs</li>
                      </ul>
                      
                      <h3>Achievements</h3>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'>10,000+ Learners</div>
                            <p>Children and families served worldwide</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box success-box'>
                            <div className='message_box_header'>50+ School Partners</div>
                            <p>Educational institutions across Zimbabwe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'values' && (
                    <div className='tab_item' role='tabpanel'>
                      <h2>Our Values</h2>
                      <div className='grid-row clearfix'>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box alert-box'>
                            <div className='message_box_header'>Child-Centered</div>
                            <p>Every decision we make puts children's needs first.</p>
                          </div>
                        </div>
                        <div className='grid-col grid-col-6'>
                          <div className='message_box question-box'>
                            <div className='message_box_header'>Evidence-Based</div>
                            <p>Our methods are backed by research and proven educational outcomes.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </section>

            {/* Accordion Section */}
            <section className='cws-widget'>
              <div className='widget-title'>Frequently Asked Questions</div>
              <section className='cws_widget_content accordion_widget'>
                {accordionPanels.map(panel => (
                  <div key={panel.id} className='accordion_section'>
                    <div 
                      className={`accordion_title ${activeAccordion === panel.id ? 'active' : ''}`}
                      onClick={() => setActiveAccordion(activeAccordion === panel.id ? null : panel.id)}
                    >
                      {panel.title}
                      <i className={`accordion_icon fa ${panel.icon}`}></i>
                    </div>
                    <div 
                      className='accordion_content' 
                      style={{ display: activeAccordion === panel.id ? 'block' : 'none' }}
                    >
                      <p>{panel.content}</p>
                    </div>
                  </div>
                ))}
              </section>
            </section>

            {/* Call to Action */}
            <section className='cws-widget'>
              <div className='widget-title'>Join Our Community</div>
              <section className='cws_widget_content'>
                <p>Ready to start your sign language journey? Join thousands of families who have already discovered the joy of learning with Little Signs.</p>
                
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-4'>
                    <a href='/learn' className='cws_button large custom_color' style={{ background: '#f2a1b0', color: '#fff' }}>
                      Start Learning
                      <i className='button-icon fa fa-play' style={{ color: '#fff' }}></i>
                    </a>
                  </div>
                  <div className='grid-col grid-col-4'>
                    <a href='/resources' className='cws_button large custom_color' style={{ background: '#8ddd67', color: '#fff' }}>
                      Browse Resources
                      <i className='button-icon fa fa-book' style={{ color: '#fff' }}></i>
                    </a>
                  </div>
                  <div className='grid-col grid-col-4'>
                    <a href='/contact' className='cws_button large custom_color' style={{ background: '#e4405f', color: '#fff' }}>
                      Contact Us
                      <i className='button-icon fa fa-envelope' style={{ color: '#fff' }}></i>
                    </a>
                  </div>
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

export default AboutPage