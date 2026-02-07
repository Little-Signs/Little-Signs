import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'
import api from '../services/api'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.password) newErrors.password = 'Password is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleResendVerification = async () => {
    const email = formData.email || prompt('Please enter your email address:')
    if (!email) return

    setIsResending(true)
    try {
      const response = await api.post('/auth/resend-verification/', { email })
      
      if (response.data.message) {
        toast.success('Verification email has been resent. Please check your inbox.', {
          position: 'top-right'
        })
      }
    } catch (error) {
      if (error.response?.data) {
        const errorMsg = error.response.data.error || 'Failed to resend verification email'
        setErrors({ general: errorMsg })
        toast.error(errorMsg, { position: 'top-right' })
      } else {
        const errorMsg = 'Failed to resend verification email. Please try again.'
        setErrors({ general: errorMsg })
        toast.error(errorMsg, { position: 'top-right' })
      }
    } finally {
      setIsResending(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({})

    try {
      // Login API call
      const response = await api.post('/auth/login/', {
        email: formData.email,
        password: formData.password
      })
      
      // Store tokens
      localStorage.setItem('access_token', response.data.access)
      localStorage.setItem('refresh_token', response.data.refresh)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      
      toast.success('Login successful! Redirecting to dashboard...', {
        position: 'top-right',
        autoClose: 2000,
        onClose: () => navigate('/learn')
      })
    } catch (error) {
      if (error.response?.data) {
        // Handle backend validation errors
        const backendErrors = error.response.data
        const formattedErrors = {}
        
        Object.keys(backendErrors).forEach(key => {
          formattedErrors[key] = Array.isArray(backendErrors[key]) 
            ? backendErrors[key][0] 
            : backendErrors[key]
        })
        
        setErrors(formattedErrors)
        
        // Set general error message for login failures
        if (backendErrors.detail || backendErrors.non_field_errors) {
          const errorMsg = backendErrors.detail || backendErrors.non_field_errors[0] || 'Invalid email or password.'
          setErrors(prev => ({ ...prev, general: errorMsg }))
          toast.error(errorMsg, { position: 'top-right' })
        } else if (!formattedErrors.email && !formattedErrors.password) {
          const errorMsg = 'Invalid email or password. Please try again.'
          setErrors({ general: errorMsg })
          toast.error(errorMsg, { position: 'top-right' })
        }
      } else {
        const errorMsg = 'Login failed. Please check your credentials and try again.'
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
      <ContentHeader title="Login" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-8'>
            <section className='cws-widget'>
              <div className='widget-title'>Welcome Back</div>
              <section className='cws_widget_content'>
                
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
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className='error-message'>{errors.email}</span>
                    )}
                  </p>

                  <p className='form-row form-row-wide'>
                    <label htmlFor='password'>
                      Password <span className='required'>*</span>
                    </label>
                    <input
                      type='password'
                      className={`input-text ${errors.password ? 'error' : ''}`}
                      name='password'
                      id='password'
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <span className='error-message'>{errors.password}</span>
                    )}
                  </p>

                  <p className='form-row'>
                    <label htmlFor='rememberme' className='inline'>
                      <input
                        name='rememberMe'
                        type='checkbox'
                        id='rememberme'
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />{' '}
                      Remember me
                    </label>
                  </p>

                  <p className='form-row' style={{ textAlign: 'center' }}>
                    <a href='/password-reset' style={{ color: '#f2a1b0', textDecoration: 'none' }}>
                      <i className='fa fa-question-circle'></i> Forgot your password?
                    </a>
                  </p>

                  <p className='form-row'>
                    <button
                      type='submit'
                      className='cws_button large'
                      disabled={isSubmitting}
                      style={{ color: '#fff', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {isSubmitting ? 'Processing...' : 'Login'}
                    </button>
                  </p>
                </form>

                <div className='form-toggle' style={{ marginTop: '30px', textAlign: 'center' }}>
                  <p>
                    Don't have an account?{' '}
                    <a href='/register' className='cws_button ' style={{ color: '#fff' }}>
                      Register Here
                    </a>
                  </p>
                </div>
              </section>
            </section>
          </div>

          <div className='grid-col grid-col-4'>
            <section className='cws-widget'>
              <div className='widget-title'>Welcome Back!</div>
              <section className='cws_widget_content' >
                <div className='message_box notice-box' style={{ marginBottom: '15px' }}>
                  <div className='message_box_header'><i className='fa fa-star'></i> Continue Learning</div>
                  <p>Access your personalized sign language lessons and track your progress.</p>
                </div>
                <div className='message_box question-box' style={{ marginBottom: '15px' }}>
                  <div className='message_box_header'><i className='fa fa-users'></i> Community Access</div>
                  <p>Connect with other learners and experienced instructors.</p>
                </div>
                <div className='message_box success-box' style={{ marginBottom: '15px' }}>
                  <div className='message_box_header'><i className='fa fa-trophy'></i> Your Progress</div>
                  <p>View your achievements and continue where you left off.</p>
                </div>
              </section>
            </section>

            <section className='cws-widget'>
              <div className='widget-title'>Need Help?</div>
              <section className='cws_widget_content'>
                <p>If you're having trouble logging in, our support team is here to help.</p>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <a href='/contact' className='cws_button custom_color' style={{ background: '#e4405f', color: '#fff', marginRight: '10px' }}>
                    <i className='button-icon fa fa-envelope'></i> Contact Support
                  </a>
                  <button 
                    className='cws_button custom_color' 
                    onClick={handleResendVerification}
                    disabled={isResending}
                    style={{ 
                      background: isResending ? '#ccc' : '#f2a1b0', 
                      color: '#fff', 
                      border: 'none',
                      marginBottom: '10px',
                      cursor: isResending ? 'not-allowed' : 'pointer',
                      opacity: isResending ? 0.7 : 1
                    }}
                  >
                    {isResending ? (
                      <>
                        <i className='fa fa-spinner fa-spin'></i> Resending...
                      </>
                    ) : (
                      <>
                        <i className='button-icon fa fa-envelope'></i> Resend Verification
                      </>
                    )}
                  </button>
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

export default LoginPage
