import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'
import { teamAPI } from '../services/api'

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission')
  const [activeAccordion, setActiveAccordion] = useState('panel1')
  const [teamMembers, setTeamMembers] = useState([])

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Our Vision' }
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

  // Fetch team members from API
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const data = await teamAPI.getAll()
        setTeamMembers(data)
      } catch (error) {
        console.error('Error fetching team members:', error)
      }
    }
    
    fetchTeamMembers()
  }, [])

  return (
    <>
      <Header />
      <ContentHeader title="About" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-12'>
            {/* Tabs Section */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
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
                      <p>At Little Signs, our mission is to bridge educational gaps by providing every child with accessible learning tools that support their unique journeys. We are dedicated to making the process of learning sign language fun, empowering, and inclusive for all children, especially those who are deaf or hard of hearing.</p>
                    </div>
                  )}

                  {activeTab === 'vision' && (
                    <div className='tab_item' role='tabpanel'>
                      <h2>Our Vision</h2>
                      <p>Our vision is to create a world where every child, regardless of their hearing ability, has the opportunity to thrive through the power of sign language. We aim to foster an inclusive educational environment where learning sign language is seen as an exciting and enriching experience for all.</p>
                    </div>
                  )}
                </div>
              </section>
            </section>

            {/* Who We Are Section */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Who We Are</div>
              <section className='cws_widget_content'>
                <p>The Little Signs introduces a whole new world of education. Bridging the gaps in education and making sure that every child get a learning tool to assist them in their learning journey.</p>
                
                <p>At LittleSigns, we believe that learning sign language can be fun, empowering and inclusive. Little Signs is a platform for kids. It is created mainly for the deaf children but can be used by anyone else who wishes to learn sign language.</p>
              </section>
            </section>

            {/* AI Ethics Statement Section */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>AI Ethics Statement</div>
              <section className='cws_widget_content'>
                <p>At Little Signs, we are committed to the ethical and responsible use of artificial intelligence in our educational platform. We believe that AI should enhance, not replace, human connection in the learning process.</p>
                
                <h3>Our AI Principles</h3>
                <div className='grid-row clearfix'>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box success-box'>
                      <div className='message_box_header'><i className='fa fa-shield'></i> Child Safety First</div>
                      <p>All AI systems are designed with child safety as the highest priority, ensuring age-appropriate interactions and content filtering.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box notice-box'>
                      <div className='message_box_header'><i className='fa fa-eye'></i> Transparency</div>
                      <p>We are transparent about how AI is used in our platform and provide clear explanations of AI-driven features to parents and educators.</p>
                    </div>
                  </div>
                </div>
                
                <div className='grid-row clearfix' style={{ marginTop: '20px' }}>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box question-box'>
                      <div className='message_box_header'><i className='fa fa-users'></i> Human-Centered Design</div>
                      <p>Our AI tools are designed to support and enhance human teaching, not replace the valuable role of parents and educators.</p>
                    </div>
                  </div>
                  <div className='grid-col grid-col-6'>
                    <div className='message_box warning-box'>
                      <div className='message_box_header'><i className='fa fa-lock'></i> Privacy & Data Protection</div>
                      <p>We strictly protect children's privacy and ensure all AI systems comply with the highest standards of data protection and security.</p>
                    </div>
                  </div>
                </div>
                
                <h3>Responsible AI Implementation</h3>
                <p>Our AI features are carefully designed to support sign language learning while maintaining ethical standards. We use AI for personalized learning paths, progress tracking, and interactive demonstrations, always with human oversight and cultural sensitivity.</p>
                
                <p>We regularly review our AI systems to ensure they remain aligned with our educational mission and ethical commitments, working with experts in child development, sign language education, and AI ethics.</p>
              </section>
            </section>

            {/* Meet Our Team Section */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
              <div className='widget-title'>Meet Our Team</div>
              <section className='cws_widget_content'>
                <p>At Little Signs, we are a passionate group of educators, developers, and visionaries united by a common goal: to create a world where every child can embrace the joy of learning through sign language.</p>
                
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
                          {member.linkedin_url && (
                            <a 
                              href={member.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className='cws_button small custom_color'
                              style={{ background: '#0077b5', color: '#fff', marginTop: '10px', display: 'inline-block' }}
                            >
                              <i className='button-icon fa fa-linkedin' style={{ color: '#fff' }}></i>
                              LinkedIn Profile
                            </a>
                          )}
                        </section>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </section>

            {/* Accordion Section */}
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
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
            <section className='cws-widget' style={{ marginBottom: '40px' }}>
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