import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'
import api from '../services/api'

const PasswordResetPage = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState('loading') // 'loading', 'valid', 'invalid', 'expired', 'success'
  const [email, setEmail] = useState('')
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    verifyToken()
  }, [token])

  const verifyToken = async () => {
    try {
      const response = await api.get(`/auth/verify-reset-token/${token}/`)
      
      if (response.data.message) {
        setStatus('valid')
        setEmail(response.data.email)
      }
    } catch (error) {
      if (error.response?.data) {
        const errorMsg = error.response.data.error || 'Invalid password reset token'
        if (errorMsg.includes('expired')) {
          setStatus('expired')
        } else {
          setStatus('invalid')
        }
        toast.error(errorMsg, { position: 'top-right' })
      } else {
        setStatus('invalid')
        toast.error('An error occurred while verifying the reset token.', { position: 'top-right' })
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required'
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters long'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
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
      const response = await api.post('/auth/password-reset-confirm/', {
        token: token,
        new_password: formData.newPassword,
        confirm_password: formData.confirmPassword
      })
      
      if (response.data.message) {
        setStatus('success')
        toast.success('Password has been reset successfully! Redirecting to login...', {
          position: 'top-right',
          autoClose: 3000,
          onClose: () => navigate('/login')
        })
      }
    } catch (error) {
      if (error.response?.data) {
        const errorMsg = error.response.data.error || 'Failed to reset password'
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

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className='password-reset-loading'>
            <div className='loading-spinner'>
              <i className='fa fa-spinner fa-spin'></i>
            </div>
            <h3>Verifying reset link...</h3>
            <p>Please wait while we verify your password reset link.</p>
          </div>
        )
      
      case 'valid':
        return (
          <div className='password-reset-form'>
            <h3>Reset Your Password</h3>
            <p>Enter your new password for {email}</p>
            
            {errors.general && (
              <div className='message_box error-box' style={{ marginBottom: '20px' }}>
                <div className='message_box_header'>Error</div>
                <p>{errors.general}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <p className='form-row form-row-wide'>
                <label htmlFor='newPassword'>
                  New Password <span className='required'>*</span>
                </label>
                <input
                  type='password'
                  className={`input-text ${errors.newPassword ? 'error' : ''}`}
                  name='newPassword'
                  id='newPassword'
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder='Enter your new password'
                />
                {errors.newPassword && (
                  <span className='error-message'>{errors.newPassword}</span>
                )}
              </p>

              <p className='form-row form-row-wide'>
                <label htmlFor='confirmPassword'>
                  Confirm Password <span className='required'>*</span>
                </label>
                <input
                  type='password'
                  className={`input-text ${errors.confirmPassword ? 'error' : ''}`}
                  name='confirmPassword'
                  id='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder='Confirm your new password'
                />
                {errors.confirmPassword && (
                  <span className='error-message'>{errors.confirmPassword}</span>
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
                      <i className='fa fa-spinner fa-spin'></i> Resetting...
                    </>
                  ) : (
                    <>
                      <i className='button-icon fa fa-lock'></i> Reset Password
                    </>
                  )}
                </button>
              </p>
            </form>
          </div>
        )
      
      case 'success':
        return (
          <div className='password-reset-success'>
            <div className='success-icon'>
              <i className='fa fa-check-circle'></i>
            </div>
            <h3>Password Reset Successful!</h3>
            <p>Your password has been reset successfully. You can now log in with your new password.</p>
            <p>You will be redirected to the login page in a few seconds...</p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button 
                className='cws_button large custom_color'
                onClick={() => navigate('/login')}
                style={{ background: '#f2a1b0', color: '#fff', border: 'none' }}
              >
                Go to Login <i className='button-icon fa fa-arrow-right'></i>
              </button>
            </div>
          </div>
        )
      
      case 'invalid':
      case 'expired':
        return (
          <div className='password-reset-error'>
            <div className='error-icon'>
              <i className='fa fa-exclamation-circle'></i>
            </div>
            <h3>Invalid or Expired Link</h3>
            <p>
              {status === 'expired' 
                ? 'This password reset link has expired. Please request a new one.'
                : 'This password reset link is invalid or has already been used.'
              }
            </p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button 
                className='cws_button large custom_color'
                onClick={() => navigate('/password-reset')}
                style={{ background: '#f2a1b0', color: '#fff', border: 'none' }}
              >
                <i className='button-icon fa fa-envelope'></i> Request New Link
              </button>
              <div style={{ marginTop: '10px' }}>
                <button 
                  className='cws_button large custom_color'
                  onClick={() => navigate('/login')}
                  style={{ background: '#8ddd67', color: '#fff', border: 'none' }}
                >
                  <i className='button-icon fa fa-arrow-left'></i> Back to Login
                </button>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <ContentHeader title="Reset Password" />
      <ContentSection>
        <div className='cws-container'>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2'>
              <div className='password-reset-container' style={{ 
                textAlign: status === 'valid' ? 'left' : 'center', 
                padding: '40px 20px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                margin: '40px 0'
              }}>
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
      <Footer />
      
      <style jsx>{`
        .password-reset-loading .loading-spinner {
          font-size: 48px;
          color: #f2a1b0;
          margin-bottom: 20px;
        }
        
        .password-reset-success .success-icon,
        .password-reset-error .error-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }
        
        .password-reset-success .success-icon {
          color: #5cb85c;
        }
        
        .password-reset-error .error-icon {
          color: #d9534f;
        }
        
        .password-reset-container h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 24px;
        }
        
        .password-reset-container p {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .password-reset-form {
          max-width: 400px;
        }
      `}</style>
    </>
  )
}

export default PasswordResetPage
