from django.shortcuts import render
from apps.coarse.models import Coarse
from .models import AboutUs, OrganisationMembers
import datetime
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from conf import settings
import json

year = datetime.date.today().year
coarses = Coarse.objects.all()

def index(request):
    context = {
        "coarses": coarses,
        "year": year
    }

    return render(request, 'pages/home.html',context)

def aboutUs(request):
    about = AboutUs.objects.all().first()
    org_members = OrganisationMembers.objects.all()
    context = {
        "coarses": coarses,
        "year": year,
        "mission": about.mission_statement,
        "vision": about.vision_statement,
        "org_members": org_members
    }

    return render(request, 'pages/about-us.html',context)

def contact(request):
    if request.method == 'POST':
        data = request.POST['values']
        print("######################")
        print(data)
    context = {
        "coarses": coarses,
        "year": year
    }
    return render(request, 'pages/contact.html',context)

@csrf_exempt
def contact(request):

    context = {
        "coarses": coarses,
        "year": year
    }

    if request.method == 'POST':
        name =  request.POST['name']
        email =  request.POST['email']
        message =  request.POST['message']

        if not name or not email or not message:
            return JsonResponse({'info': 'error', 'message': 'All fields are required.'}, status=400)

        try:
            send_mail(
                subject=f'Contact Form Submission from {name}',
                message=message,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.CONTACT_EMAIL],
                fail_silently=False,
            )
            return JsonResponse({'info': 'success'}, status=200)
        except Exception as e:
            print(e)
            return JsonResponse({'info': 'error', 'message': str(e)}, status=500)

    return render(request, 'pages/contact.html',context)

def privacyPolicy(request):

    return render(request, 'pages/privacy-policy.html')

def termOfuse(request):

    return render(request, 'pages/term-of-use.html')
