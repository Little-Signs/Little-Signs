from django.shortcuts import render
from apps.learning.models import Course
from .models import AboutUs, OrganisationMembers
import datetime
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from conf import settings
from django.views.generic import DetailView
import json

year = datetime.date.today().year
courses = Course.objects.all()


def index(request):
    context = {"courses": courses, "year": year}

    return render(request, "pages/home.html", context)


def aboutUs(request):
    about = AboutUs.objects.all().first()
    org_members = OrganisationMembers.objects.all()
    context = {
        "courses": courses,
        "year": year,
        "mission": about.mission_statement,
        "vision": about.vision_statement,
        "org_members": org_members,
    }

    return render(request, "pages/about-us.html", context)


def contact(request):
    if request.method == "POST":
        data = request.POST["values"]
    context = {"courses": courses, "year": year}
    return render(request, "pages/contact.html", context)


@csrf_exempt
def contact(request):

    context = {"courses": courses, "year": year}

    if request.method == "POST":
        name = request.POST["name"]
        email = request.POST["email"]
        message = request.POST["message"]

        if not name or not email or not message:
            return JsonResponse(
                {"info": "error", "message": "All fields are required."}, status=400
            )

        try:
            send_mail(
                subject=f"Contact Form Submission from {name}",
                message=message,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.CONTACT_EMAIL],
                fail_silently=False,
            )
            return JsonResponse({"info": "success"}, status=200)
        except Exception as e:
            print(e)
            return JsonResponse({"info": "error", "message": str(e)}, status=500)

    return render(request, "pages/contact.html", context)


def privacyPolicy(request):

    return render(request, "pages/privacy-policy.html")


def termOfuse(request):

    return render(request, "pages/term-of-use.html")


class CourseDetailView(DetailView):
    model = Course
    context_object_name = "course"
    template_name = "pages/course-detail.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["other_courses"] = Course.objects.all().exclude(pk=self.get_object().pk)
        return context
