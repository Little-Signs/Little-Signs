from django.shortcuts import redirect, render
from .form import  RegistrationForm
from django.contrib.auth import login
from django.utils.encoding import force_str,force_bytes
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib import messages
from .models import User
from .tokens import generate_token
from conf.constants import ACCOUNT_CREATED_SUCCESSFUL
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.core.mail import EmailMessage, send_mail
from conf.settings import EMAIL_HOST_USER

def register_user(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user_registration = form.save(commit=False)
            user_registration.save()
            current_site = get_current_site(request)
            from_email = EMAIL_HOST_USER
            to_list = [user_registration.email]
            email_subject = "Confirm your Email"
            
            body = render_to_string('authemail/signup_email.html',{
            'name': user_registration.first_name,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(user_registration.pk)),
            'token': generate_token.make_token(user_registration)
            })

            email_msg = EmailMessage(email_subject,body,from_email,to_list)
            email_msg.content_subtype = "html"
            email_msg.send()
            messages.success(request,ACCOUNT_CREATED_SUCCESSFUL)
            return render(request, 'registration/register.html', {'form': form, 'page_name':'Sign up'})
        else:
            messages.error(request,form.errors.as_text())
            return render(request, 'registration/register.html', {'form': form, 'page_name':'Sign up'})
    else:
        form = RegistrationForm()
    return render(request, 'registration/register.html', {'form': form})

def activate(request,uidb64,token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        myuser = User.objects.get(pk=uid)
    except (TypeError,ValueError,OverflowError,User.DoesNotExist):
        myuser = None

    if myuser is not None and generate_token.check_token(myuser,token):
        myuser.is_active = True
        myuser.save()
        return render(request,'registration/activation_complete.html')
    else:
        return render(request,'registration/activation_failed.html')