import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'
import api from '../services/api'

const PasswordResetRequestPage = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { value } = e.target
    setEmail(value)
    // Clear error when user starts typing
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await api.post('/auth/password-reset-request/', { email })
      
      if (response.data.message) {
        toast.success(response.data.message, {
          position: 'top-right',
          autoClose: 5000
        })
        
        // Redirect to login after showing success message
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      }
    } catch (error) {
      if (error.response?.data) {
        const errorMsg = error.response.data.error || 'Failed to send password reset email'
        setErrors({ general: errorMsg })
        toast.error(errorMsg, { position: 'top-right' })
      } else {
        const errorMsg = 'An error occurred. Please try again.'
        setErrors({ general: errorMsg })
        toast.error(errorMsg, { position: 'top-right' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <ContentHeader title="Reset Password" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-8'>
            <section className='cws-widget'>
              <div className='widget-title'>Reset Your Password</div>
              <section className='cws_widget_content'>
                <p>Enter your email address and we'll send you a link to reset your password.</p>
                
                {errors.general && (
                  <div className='message_box error-box'>
                    <div className='message_box_header'>Error</div>
                    <p>{errors.general}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className='login'>
                  <p className='form-row form-row-wide'>
                    <label htmlFor='email'>
                      Email Address <span className='required'>*</span>
                    </label>
                    <input
                      type='email'
                      className={`input-text ${errors.email ? 'error' : ''}`}
                      name='email'
                      id='email'
                      value={email}
                      onChange={handleChange}
                      placeholder='Enter your email address'
                    />
                    {errors.email && (
                      <span className='error-message'>{errors.email}</span>
                    )}
                  </p>

                  <p className='form-row'>
                    <button
                      type='submit'
                      className='cws_button large custom_color'
                      disabled={isSubmitting}
                      style={{ 
                        background: isSubmitting ? '#ccc' : '#f2a1b0', 
                        color: '#fff', 
                        border: 'none', 
                        cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                        opacity: isSubmitting ? 0.7 : 1 
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <i className='fa fa-spinner fa-spin'></i> Sending...
                        </>
                      ) : (
                        <>
                          <i className='button-icon fa fa-envelope'></i> Send Reset Link
                        </>
                      )}
                    </button>
                  </p>
                </form>

                <div className='form-toggle' style={{ marginTop: '30px', textAlign: 'center' }}>
                  <p>
                    Remember your password?{' '}
                    <a href='/login' className='cws_button custom_color' style={{ color: '#fff' }}>
                      Back to Login
                    </a>
                  </p>
                </div>
              </section>
            </section>
          </div>

          <div className='grid-col grid-col-4'>
            <section className='cws-widget'>
              <div className='widget-title'>Password Reset Help</div>
              <section className='cws_widget_content'>
                <div className='message_box notice-box' style={{ marginBottom: '15px' }}>
                  <div className='message_box_header'><i className='fa fa-info-circle'></i> How it works</div>
                  <p>Enter your email address and we'll send you a secure link to reset your password.</p>
                </div>
                <div className='message_box question-box' style={{ marginBottom: '15px' }}>
                  <div className='message_box_header'><i className='fa fa-clock'></i> Link expires</div>
                  <p>The password reset link will expire in 24 hours for security reasons.</p>
                </div>
                <div className='message_box success-box' style={{ marginBottom: '15px' }}>
                  <div className='message_box_header'><i className='fa fa-shield'></i> Secure process</div>
                  <p>Your password reset is handled securely with encrypted tokens.</p>
                </div>
                <div className='message_box alert-box'>
                  <div className='message_box_header'><i className='fa fa-envelope'></i> Check your email</div>
                  <p>Don't forget to check your spam folder if you don't see the email.</p>
                </div>
              </section>
            </section>

            <section className='cws-widget'>
              <div className='widget-title'>Need Help?</div>
              <section className='cws_widget_content'>
                <p>If you're having trouble resetting your password, our support team is here to help.</p>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <a href='/contact' className='cws_button custom_color' style={{ background: '#e4405f', color: '#fff' }}>
                    <i className='button-icon fa fa-envelope'></i> Contact Support
                  </a>
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

export default PasswordResetRequestPage
