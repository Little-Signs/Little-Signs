import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import Footer from '../components/layout/Footer'
import ContentSection from '../components/ContentSection'
import ContentHeader from '../components/layout/ContentHeader'
import api from '../services/api'

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    // Step 2: Account Details
    accountType: 'parent', // 'parent' or 'organization'
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    parentRelationship: 'mother', // 'mother', 'father', 'guardian', 'other'
    numberOfChildren: '',
    childrenAges: '',
    agreeTerms: false,
    agreePrivacy: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const validateStep1 = () => {
    const newErrors = {}

    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.firstName) newErrors.firstName = 'First name is required'
    if (!formData.lastName) newErrors.lastName = 'Last name is required'
    if (!formData.password) newErrors.password = 'Password is required'
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    if (formData.password && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}

    if (formData.accountType === 'parent') {
      if (!formData.parentFirstName) newErrors.parentFirstName = 'Parent first name is required'
      if (!formData.parentLastName) newErrors.parentLastName = 'Parent last name is required'
      if (!formData.parentEmail) newErrors.parentEmail = 'Parent email is required'
      if (!formData.parentPhone) newErrors.parentPhone = 'Parent phone is required'
      if (!formData.numberOfChildren) newErrors.numberOfChildren = 'Number of children is required'
    }

    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions'
    if (!formData.agreePrivacy) newErrors.agreePrivacy = 'You must agree to the privacy policy'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (currentStep === 1) {
      handleNextStep()
      return
    }

    if (!validateStep2()) return

    setIsSubmitting(true)
    setErrors({})

    try {
      // Registration API call
      const response = await api.post('/auth/register/', {
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirmPassword,
        first_name: formData.firstName,
        last_name: formData.lastName,
        account_type: formData.accountType,
        parent_first_name: formData.parentFirstName,
        parent_last_name: formData.parentLastName,
        parent_email: formData.parentEmail,
        parent_phone: formData.parentPhone,
        parent_relationship: formData.parentRelationship,
        number_of_children: formData.numberOfChildren,
        children_ages: formData.childrenAges
      })
      
      // Store email for potential resend verification
      localStorage.setItem('pending_verification_email', formData.email)
      toast.success('Registration successful! Please check your email to verify your account.', {
        position: 'top-right',
        autoClose: 3000,
        onClose: () => navigate('/login')
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
        // Show general error toast if no specific field errors
        if (!Object.keys(formattedErrors).some(key => ['email', 'password', 'firstName', 'lastName', 'accountType', 'parentFirstName', 'parentLastName', 'parentEmail', 'parentPhone', 'parentRelationship', 'numberOfChildren'].includes(key))) {
          toast.error('Registration failed. Please check your information and try again.', {
            position: 'top-right'
          })
        }
      } else {
        const errorMsg = 'An error occurred. Please try again.'
        setErrors({ general: errorMsg })
        toast.error(errorMsg, { position: 'top-right' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep1 = () => (
    <>
      <div className='step-indicator'>
        <div className='step active'>Step 1: Personal Details</div>
        <div className='step'>Step 2: Account Details</div>
      </div>

      <div className='grid-row clearfix'>
        <div className='grid-col grid-col-6'>
          <p className='form-row form-row-wide'>
            <label htmlFor='firstName'>
              First Name <span className='required'>*</span>
            </label>
            <input
              type='text'
              className={`input-text ${errors.firstName ? 'error' : ''}`}
              name='firstName'
              id='firstName'
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className='error-message'>{errors.firstName}</span>
            )}
          </p>
        </div>
        <div className='grid-col grid-col-6'>
          <p className='form-row form-row-wide'>
            <label htmlFor='lastName'>
              Last Name <span className='required'>*</span>
            </label>
            <input
              type='text'
              className={`input-text ${errors.lastName ? 'error' : ''}`}
              name='lastName'
              id='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className='error-message'>{errors.lastName}</span>
            )}
          </p>
        </div>
      </div>


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
        />
        {errors.confirmPassword && (
          <span className='error-message'>{errors.confirmPassword}</span>
        )}
      </p>

      <div className='step-buttons' style={{ marginTop: '20px' }}>
        <button
          type='button'
          className='cws_button large custom_color'
          onClick={handleNextStep}
          style={{ background: '#f2a1b0', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Next Step <i className='button-icon fa fa-arrow-right'></i>
        </button>
      </div>
    </>
  )

  const renderStep2 = () => (
    <>
      <div className='step-indicator'>
        <div className='step completed'>Step 1: Personal Details ✓</div>
        <div className='step active'>Step 2: Account Details</div>
      </div>

      <p className='form-row form-row-wide address-field update_totals_on_change validate-required' id='account_type_field'>
        <label htmlFor='accountType' className=''>Account Type
          <abbr className='required' title='required'>*</abbr>
        </label>
        <select 
          name='accountType' 
          id='accountType' 
          className={`country_to_state country_select select2-hidden-accessible ${errors.accountType ? 'error' : ''}`}
          value={formData.accountType}
          onChange={handleChange}
          tabIndex='-1' 
          aria-hidden='true'
        >
          <option value='parent'>Parent/Guardian</option>
          <option value='organization'>Organization/School</option>
        </select>
        {errors.accountType && (
          <span className='error-message'>{errors.accountType}</span>
        )}
      </p>

      {formData.accountType === 'organization' && (
        <div className='message_box notice-box'>
          <div className='message_box_header'><i className='fa fa-info-circle'></i> Organization Registration</div>
          <p>Organization accounts require additional setup. After registering, please contact support to complete your organization profile.</p>
        </div>
      )}

      {formData.accountType === 'parent' && (
        <>
          <div className='grid-row clearfix'>
            <div className='grid-col grid-col-6'>
              <p className='form-row form-row-wide'>
                <label htmlFor='parentFirstName'>
                  Parent First Name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  className={`input-text ${errors.parentFirstName ? 'error' : ''}`}
                  name='parentFirstName'
                  id='parentFirstName'
                  value={formData.parentFirstName}
                  onChange={handleChange}
                />
                {errors.parentFirstName && (
                  <span className='error-message'>{errors.parentFirstName}</span>
                )}
              </p>
            </div>
            <div className='grid-col grid-col-6'>
              <p className='form-row form-row-wide'>
                <label htmlFor='parentLastName'>
                  Parent Last Name <span className='required'>*</span>
                </label>
                <input
                  type='text'
                  className={`input-text ${errors.parentLastName ? 'error' : ''}`}
                  name='parentLastName'
                  id='parentLastName'
                  value={formData.parentLastName}
                  onChange={handleChange}
                />
                {errors.parentLastName && (
                  <span className='error-message'>{errors.parentLastName}</span>
                )}
              </p>
            </div>
          </div>

          <p className='form-row form-row-wide'>
            <label htmlFor='parentEmail'>
              Parent Email <span className='required'>*</span>
            </label>
            <input
              type='email'
              className={`input-text ${errors.parentEmail ? 'error' : ''}`}
              name='parentEmail'
              id='parentEmail'
              value={formData.parentEmail}
              onChange={handleChange}
            />
            {errors.parentEmail && (
              <span className='error-message'>{errors.parentEmail}</span>
            )}
          </p>

          <p className='form-row form-row-wide'>
            <label htmlFor='parentPhone'>
              Parent Phone <span className='required'>*</span>
            </label>
            <input
              type='text'
              className={`input-text ${errors.parentPhone ? 'error' : ''}`}
              name='parentPhone'
              id='parentPhone'
              value={formData.parentPhone}
              onChange={handleChange}
            />
            {errors.parentPhone && (
              <span className='error-message'>{errors.parentPhone}</span>
            )}
          </p>

          <p className='form-row form-row-wide address-field update_totals_on_change validate-required' id='parent_relationship_field'>
            <label htmlFor='parentRelationship' className=''>Relationship
              <abbr className='required' title='required'>*</abbr>
            </label>
            <select 
              name='parentRelationship' 
              id='parentRelationship' 
              className={`country_to_state country_select select2-hidden-accessible ${errors.parentRelationship ? 'error' : ''}`}
              value={formData.parentRelationship}
              onChange={handleChange}
              tabIndex='-1' 
              aria-hidden='true'
            >
              <option value='mother'>Mother</option>
              <option value='father'>Father</option>
              <option value='guardian'>Guardian</option>
              <option value='other'>Other</option>
            </select>
            {errors.parentRelationship && (
              <span className='error-message'>{errors.parentRelationship}</span>
            )}
          </p>

          <p className='form-row form-row-wide'>
            <label htmlFor='numberOfChildren'>
              Number of Children <span className='required'>*</span>
            </label>
            <input
              type='text'
              className={`input-text ${errors.numberOfChildren ? 'error' : ''}`}
              name='numberOfChildren'
              id='numberOfChildren'
              value={formData.numberOfChildren}
              onChange={handleChange}
            />
            {errors.numberOfChildren && (
              <span className='error-message'>{errors.numberOfChildren}</span>
            )}
          </p>

          <p className='form-row form-row-wide'>
            <label htmlFor='childrenAges'>
              Children Ages (comma separated)
            </label>
            <input
              type='text'
              className='input-text'
              name='childrenAges'
              id='childrenAges'
              value={formData.childrenAges}
              onChange={handleChange}
              placeholder='e.g., 5, 8, 12'
            />
          </p>
        </>
      )}

      <div className='terms-section'>
        <p className='form-row'>
          <label htmlFor='agreeTerms' className='inline'>
            <input
              name='agreeTerms'
              type='checkbox'
              id='agreeTerms'
              checked={formData.agreeTerms}
              onChange={handleChange}
            />{' '}
            I agree to the <a href='/terms' target='_blank'>Terms and Conditions</a> <span className='required'>*</span>
          </label>
          {errors.agreeTerms && (
            <span className='error-message'>{errors.agreeTerms}</span>
          )}
        </p>

        <p className='form-row'>
          <label htmlFor='agreePrivacy' className='inline'>
            <input
              name='agreePrivacy'
              type='checkbox'
              id='agreePrivacy'
              checked={formData.agreePrivacy}
              onChange={handleChange}
            />{' '}
            I agree to the <a href='/privacy' target='_blank'>Privacy Policy</a> <span className='required'>*</span>
          </label>
          {errors.agreePrivacy && (
            <span className='error-message'>{errors.agreePrivacy}</span>
          )}
        </p>
      </div>

      <div className='step-buttons' style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button
          type='button'
          className='cws_button large'
          onClick={handlePreviousStep}
          style={{  color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          <i className='button-icon fa fa-arrow-left'></i> Previous
        </button>
        <button
          type='submit'
          className='cws_button large custom_color'
          disabled={isSubmitting}
          style={{ background: '#f2a1b0', color: '#fff', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? 'Processing...' : 'Complete Registration'}
        </button>
      </div>
    </>
  )

  return (
    <>
      <Header />
      <ContentHeader title="Register" />
      <ContentSection>
        <div className='grid-row clearfix'>
          <div className='grid-col grid-col-8'>
            <section className='cws-widget'>
              <div className='widget-title'>Create Account</div>
              <section className='cws_widget_content'>
                
                {errors.general && (
                  <div className='message_box error-box'>
                    <div className='message_box_header'>Error</div>
                    <p>{errors.general}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className='login'>
                  {currentStep === 1 ? renderStep1() : renderStep2()}
                </form>

                <div className='form-toggle' style={{ marginTop: '30px', textAlign: 'center' }}>
                  <p>
                    Already have an account?{' '}
                    <a href='/login' className='cws_button custom_color' style={{  color: '#fff' }}>
                      Login Here
                    </a>
                  </p>
                </div>
              </section>
            </section>
          </div>

          <div className='grid-col grid-col-4'>
            <section className='cws-widget'>
              <div className='widget-title'>Why Join Little Signs?</div>
              <section className='cws_widget_content'>
                <div className='message_box notice-box' style={{ marginBottom: '15px' }}>
                  <div className='message_box_header'><i className='fa fa-star'></i> Premium Content</div>
                  <p>Access hundreds of sign language lessons and interactive activities.</p>
                </div>
                <div className='message_box question-box' style={{ marginBottom: '15px' }}>
                  <div className='message_box_header'><i className='fa fa-users'></i> Community</div>
                  <p>Connect with other learners and experienced instructors.</p>
                </div>
                <div className='message_box success-box'>
                  <div className='message_box_header'><i className='fa fa-trophy'></i> Progress Tracking</div>
                  <p>Monitor your learning journey and earn achievement badges.</p>
                </div>
              </section>
            </section>

            <section className='cws-widget' style={{ marginTop: '20px' }}>
              <div className='widget-title'>Account Types</div>
              <section className='cws_widget_content'>
                <div className='message_box alert-box' style={{ marginBottom: '15px' }}>
                  <div className='message_box_header'><i className='fa fa-home'></i> Parent Account</div>
                  <p>Perfect for families wanting to learn sign language together.</p>
                </div>
                <div className='message_box warning-box'>
                  <div className='message_box_header'><i className='fa fa-building'></i> Organization Account</div>
                  <p>Ideal for schools, centers, and organizations teaching sign language.</p>
                </div>
              </section>
            </section>

            <section className='cws-widget' style={{ marginTop: '20px' }}>
              <div className='widget-title'>Need Help?</div>
              <section className='cws_widget_content'>
                <p>If you have any questions about registration or need assistance, our support team is here to help.</p>
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

export default RegisterPage
