import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from django.conf import settings
from django.template.loader import render_to_string
from django.urls import reverse


def send_verification_email(user_email, verification_token):
    """
    Send email verification email to user
    """
    try:
        # Email configuration
        smtp_server = getattr(settings, 'EMAIL_HOST', 'smtp.gmail.com')
        smtp_port = getattr(settings, 'EMAIL_PORT', 587)
        smtp_username = getattr(settings, 'EMAIL_HOST_USER', '')
        smtp_password = getattr(settings, 'EMAIL_HOST_PASSWORD', '')
        
        # Create verification URL
        verification_url = f"{getattr(settings, 'FRONTEND_URL', 'http://localhost:3000')}/verify-email/{verification_token}"
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = user_email
        msg['Subject'] = 'Verify Your Little Signs Account'
        
        # Email body
        body = f"""
Dear Little Signs User,

Thank you for registering with Little Signs! To complete your registration and activate your account, please verify your email address by clicking the link below:

{verification_url}

This verification link will expire in 24 hours.

If you did not create an account with Little Signs, please ignore this email.

Best regards,
The Little Signs Team

---
Email: info@littlesigns.co.zw
Email: littlesignszw@gmail.com
Phone: +263 78 424 6176
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(msg)
        server.quit()
        
        return True, "Verification email sent successfully"
        
    except Exception as e:
        return False, f"Failed to send verification email: {str(e)}"


def send_password_reset_email(user_email, reset_token):
    """
    Send password reset email to user
    """
    try:
        # Email configuration
        smtp_server = getattr(settings, 'EMAIL_HOST', 'smtp.gmail.com')
        smtp_port = getattr(settings, 'EMAIL_PORT', 587)
        smtp_username = getattr(settings, 'EMAIL_HOST_USER', '')
        smtp_password = getattr(settings, 'EMAIL_HOST_PASSWORD', '')
        
        # Create password reset URL
        reset_url = f"{getattr(settings, 'FRONTEND_URL', 'http://localhost:3000')}/reset-password/{reset_token}"
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = user_email
        msg['Subject'] = 'Reset Your Little Signs Password'
        
        # Email body
        body = f"""
Dear Little Signs User,

We received a request to reset your password for your Little Signs account. To reset your password, click the link below:

{reset_url}

This password reset link will expire in 24 hours for security reasons.

If you did not request a password reset, please ignore this email. Your password will remain unchanged.

For your security, please make sure to:
- Choose a strong password with at least 8 characters
- Include a mix of letters, numbers, and special characters
- Don't use passwords you've used before

Best regards,
The Little Signs Team

---
Email: info@littlesigns.co.zw
Email: littlesignszw@gmail.com
Phone: +263 78 424 6176
Website: littlesigns.co.zw
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(msg)
        server.quit()
        
        return True, "Password reset email sent successfully"
        
    except Exception as e:
        return False, f"Failed to send password reset email: {str(e)}"


def send_welcome_email(user_email, first_name):
    """
    Send welcome email to newly verified user
    """
    try:
        # Email configuration
        smtp_server = getattr(settings, 'EMAIL_HOST', 'smtp.gmail.com')
        smtp_port = getattr(settings, 'EMAIL_PORT', 587)
        smtp_username = getattr(settings, 'EMAIL_HOST_USER', '')
        smtp_password = getattr(settings, 'EMAIL_HOST_PASSWORD', '')
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = user_email
        msg['Subject'] = 'Welcome to Little Signs!'
        
        # Email body
        body = f"""
Dear {first_name},

Welcome to Little Signs! Your account has been successfully verified and is now active.

You can now:
- Access our comprehensive sign language lessons
- Track your learning progress
- Connect with our community of learners
- Earn achievement badges

Start your sign language journey today by logging into your account.

If you have any questions or need assistance, please don't hesitate to contact our support team.

Best regards,
The Little Signs Team

---
Email: info@littlesigns.co.zw
Email: littlesignszw@gmail.com
Phone: +263 78 424 6176
Website: littlesigns.co.zw
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(msg)
        server.quit()
        
        return True, "Welcome email sent successfully"
        
    except Exception as e:
        return False, f"Failed to send welcome email: {str(e)}"
