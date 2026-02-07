import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from django.conf import settings
from django.template.loader import render_to_string


def send_contact_email(name, email, message):
    """
    Send contact form submission to both email addresses
    with reply-to set to the sender's email
    """
    try:
        # Email configuration
        smtp_server = getattr(settings, 'EMAIL_HOST', 'smtp.gmail.com')
        smtp_port = getattr(settings, 'EMAIL_PORT', 587)
        smtp_username = getattr(settings, 'EMAIL_HOST_USER', '')
        smtp_password = getattr(settings, 'EMAIL_HOST_PASSWORD', '')
        
        # Recipients
        recipients = [
            'info@littlesigns.co.zw',
            'littlesignszw@gmail.com'
        ]
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = ', '.join(recipients)
        msg['Reply-To'] = email
        msg['Subject'] = f'New Contact Form Submission from {name}'
        
        # Email body
        body = f"""
New contact form submission received:

Name: {name}
Email: {email}

Message:
{message}

---
This message was sent from the Little Signs website contact form.
Reply to this email to respond directly to the sender.
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(msg)
        server.quit()
        
        return True, "Email sent successfully"
        
    except Exception as e:
        return False, f"Failed to send email: {str(e)}"


def send_pitch_deck_email(email, name=''):
    """
    Send pitch deck download link to the requesting user
    """
    try:
        # Email configuration
        smtp_server = getattr(settings, 'EMAIL_HOST', 'smtp.gmail.com')
        smtp_port = getattr(settings, 'EMAIL_PORT', 587)
        smtp_username = getattr(settings, 'EMAIL_HOST_USER', '')
        smtp_password = getattr(settings, 'EMAIL_HOST_PASSWORD', '')
        frontend_url = getattr(settings, 'FRONTEND_URL', 'http://localhost:3000')
        
        download_link = f"{frontend_url}/docs/little_signs_pitch_deck.pdf"
        
        greeting = f"Dear {name}," if name else "Hello,"
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = email
        msg['Subject'] = 'Little Signs - Pitch Deck Download'
        
        body = f"""
{greeting}

Thank you for your interest in Little Signs!

You can download our pitch deck using the link below:

{download_link}

If you have any questions or would like to discuss investment opportunities, please don't hesitate to reach out to us.

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
        
        return True, "Pitch deck email sent successfully"
        
    except Exception as e:
        return False, f"Failed to send pitch deck email: {str(e)}"


def send_auto_reply(name, email):
    """
    Send automatic reply to the person who submitted the contact form
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
        msg['To'] = email
        msg['Subject'] = 'Thank you for contacting Little Signs'
        
        # Auto-reply body
        body = f"""
Dear {name},

Thank you for contacting Little Signs! We have received your message and will get back to you as soon as possible.

Your message is important to us, and we typically respond within 24-48 hours.

If you have any urgent inquiries, please don't hesitate to call us at:
+263 78 424 6176

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
        
        return True, "Auto-reply sent successfully"
        
    except Exception as e:
        return False, f"Failed to send auto-reply: {str(e)}"
