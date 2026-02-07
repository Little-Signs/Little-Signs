import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'
import api from '../services/api'

const VerifyEmailPage = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState('loading') // 'loading', 'success', 'error', 'already_verified'
  const [message, setMessage] = useState('')
  const [isResending, setIsResending] = useState(false)

  useEffect(() => {
    verifyEmail()
  }, [token])

  const verifyEmail = async () => {
    try {
      const response = await api.get(`/auth/verify-email/${token}/`)
      
      if (response.data.message) {
        setStatus('success')
        setMessage(response.data.message)
        toast.success('Email verified successfully! Redirecting to login...', {
          position: 'top-right',
          autoClose: 3000,
          onClose: () => navigate('/login')
        })
      }
    } catch (error) {
      if (error.response?.data) {
        if (error.response.data.message) {
          setStatus('already_verified')
          setMessage(error.response.data.message)
          toast.info(error.response.data.message, { position: 'top-right' })
        } else {
          setStatus('error')
          const errorMsg = error.response.data.error || 'Invalid verification token'
          setMessage(errorMsg)
          toast.error(errorMsg, { position: 'top-right' })
        }
      } else {
        const errorMsg = 'An error occurred during verification. Please try again.'
        setStatus('error')
        setMessage(errorMsg)
        toast.error(errorMsg, { position: 'top-right' })
      }
    }
  }

  const handleResendVerification = async () => {
    setIsResending(true)
    try {
      // Get email from localStorage or prompt user
      const email = localStorage.getItem('pending_verification_email')
      if (!email) {
        const userEmail = prompt('Please enter your email address:')
        if (!userEmail) return
        
        const response = await api.post('/auth/resend-verification/', { email: userEmail })
        
        if (response.data.message) {
          setMessage('Verification email has been resent. Please check your inbox.')
          localStorage.setItem('pending_verification_email', userEmail)
          toast.success('Verification email has been resent. Please check your inbox.', {
            position: 'top-right'
          })
        }
      } else {
        const response = await api.post('/auth/resend-verification/', { email })
        if (response.data.message) {
          setMessage('Verification email has been resent. Please check your inbox.')
          toast.success('Verification email has been resent. Please check your inbox.', {
            position: 'top-right'
          })
        }
      }
    } catch (error) {
      if (error.response?.data) {
        const errorMsg = error.response.data.error || 'Failed to resend verification email'
        setMessage(errorMsg)
        toast.error(errorMsg, { position: 'top-right' })
      } else {
        const errorMsg = 'Failed to resend verification email. Please try again.'
        setMessage(errorMsg)
        toast.error(errorMsg, { position: 'top-right' })
      }
    } finally {
      setIsResending(false)
    }
  }

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className='verification-loading'>
            <div className='loading-spinner'>
              <i className='fa fa-spinner fa-spin'></i>
            </div>
            <h3>Verifying your email...</h3>
            <p>Please wait while we verify your email address.</p>
          </div>
        )
      
      case 'success':
        return (
          <div className='verification-success'>
            <div className='success-icon'>
              <i className='fa fa-check-circle'></i>
            </div>
            <h3>Email Verified Successfully!</h3>
            <p>{message}</p>
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
      
      case 'already_verified':
        return (
          <div className='verification-info'>
            <div className='info-icon'>
              <i className='fa fa-info-circle'></i>
            </div>
            <h3>Email Already Verified</h3>
            <p>{message}</p>
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
      
      case 'error':
        return (
          <div className='verification-error'>
            <div className='error-icon'>
              <i className='fa fa-exclamation-circle'></i>
            </div>
            <h3>Verification Failed</h3>
            <p>{message}</p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button 
                className='cws_button large custom_color'
                onClick={handleResendVerification}
                disabled={isResending}
                style={{ 
                  background: isResending ? '#ccc' : '#f2a1b0', 
                  color: '#fff', 
                  border: 'none',
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
                    <i className='button-icon fa fa-envelope'></i> Resend Verification Email
                  </>
                )}
              </button>
              <div style={{ marginTop: '10px' }}>
                <button 
                  className='cws_button large custom_color'
                  onClick={() => navigate('/register')}
                  style={{ background: '#8ddd67', color: '#fff', border: 'none' }}
                >
                  <i className='button-icon fa fa-user-plus'></i> Register Again
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
      <ContentHeader 
        title="Email Verification" 
        breadcrumb="Email Verification"
      />
      
      <ContentSection>
        <div className='cws-container'>
          <div className='row'>
            <div className='col-md-8 col-md-offset-2'>
              <div className='verification-container' style={{ 
                textAlign: 'center', 
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
        .verification-loading .loading-spinner {
          font-size: 48px;
          color: #f2a1b0;
          margin-bottom: 20px;
        }
        
        .verification-success .success-icon,
        .verification-info .info-icon,
        .verification-error .error-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }
        
        .verification-success .success-icon {
          color: #5cb85c;
        }
        
        .verification-info .info-icon {
          color: #5bc0de;
        }
        
        .verification-error .error-icon {
          color: #d9534f;
        }
        
        .verification-container h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 24px;
        }
        
        .verification-container p {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.6;
        }
      `}</style>
    </>
  )
}

export default VerifyEmailPage
