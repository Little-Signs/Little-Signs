import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'
import { contactAPI } from '../services/api'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const data = await contactAPI.submit(formData)

      if (data.success) {
        setSubmitStatus('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <ContentHeader title="Contact" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-9'>
            <section className='cws-widget'>
              <div className='widget-title'>Leave a Message</div>
              <section className='cws_widget_content'>
                {submitStatus && (
                  <div className={`alert ${submitStatus.includes('Thank you') ? 'success' : 'error'}`}>
                    {submitStatus}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="wpcf7-form contact-form">
                  <p>
                    <span className="wpcf7-form-control-wrap your-name">
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        size="49" 
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" 
                        required 
                        placeholder="Name" 
                      />
                    </span> 
                    <span className="wpcf7-form-control-wrap your-email">
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        size="49" 
                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" 
                        required 
                        placeholder="E-mail" 
                      />
                    </span>
                    <span className="wpcf7-form-control-wrap your-message">
                      <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        cols="103" 
                        rows="8" 
                        className="wpcf7-form-control wpcf7-textarea" 
                        required 
                        placeholder="Message"
                      ></textarea>
                    </span>
                    <input 
                      type="submit" 
                      value={isSubmitting ? "Sending..." : "Send"} 
                      className="wpcf7-form-control wpcf7-submit" 
                      disabled={isSubmitting}
                    />
                  </p>
                </form>
              </section>
            </section>
          </div>
          <div className='grid-col grid-col-3'>
            <section className='cws-widget'>
              <div className='widget-title'>Contact Details</div>
              <section className='cws_widget_content'>
                <p>Get in touch with us for any inquiries about our sign language learning programs.</p>
                <p><strong>Phone: +263 78 424 6176</strong></p>
                <p><strong>Email: <a className="link" href="mailto:info@littlesigns.co.zw">info@littlesigns.co.zw</a></strong></p>
                <p><strong>Email: <a className="link" href="mailto:littlesignszw@gmail.com">littlesignszw@gmail.com</a></strong></p>
              </section>
            </section>
          </div>
        </div>
      </ContentSection>
      <Footer />
    </>
  )
}

export default ContactPage
