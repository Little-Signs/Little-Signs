from django.shortcuts import render, get_object_or_404
from .models import Course, CourseContent, CourseEnrollment
from apps.users.models import User
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from django.utils import timezone
from .models import Course, Badge
from django.http import JsonResponse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator
from django.utils.decorators import method_decorator
from django.template.loader import render_to_string


class LearnListView(LoginRequiredMixin, ListView):
    login_url = "/account/login/"
    redirect_field_name = "next"
    model = Course
    context_object_name = "courses"
    template_name = "learn/home.html"
    paginate_by = 2

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["user"] = self.request.user
        context["page_name"] = "Home"
        return context


class LearnDetailView(LoginRequiredMixin, DetailView):
    login_url = "/account/login/"
    redirect_field_name = "next"
    model = Course
    context_object_name = "course"
    template_name = "learn/course_detail.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        is_enrolled = CourseEnrollment.is_user_enrolled(
            self.request.user, self.get_object()
        )
        context["now"] = timezone.now()
        context["page_name"] = f"Learning {self.get_object().title}"
        context["other_courses"] = Course.objects.all().exclude(pk=self.get_object().pk)
        context["badges"] = self.request.user.badges.all()

        if is_enrolled:
            context["enrollment"] = CourseEnrollment.objects.filter(
                user=self.request.user, course=self.get_object()
            ).first()
            content_list = CourseContent.objects.filter(course=self.get_object())
            paginator = Paginator(content_list, 3)
            page_number = self.request.GET.get("page", 1)
            page_obj = paginator.get_page(page_number)
            context["content_page_obj"] = page_obj

        return context


@csrf_exempt
def enroll_user(request):
    if request.method == "POST":
        coarse_id = request.POST.get("course")
        user_id = request.POST.get("user")

        course = get_object_or_404(Course, id=coarse_id)
        user = get_object_or_404(User, pk=user_id)

        user_enrollment, created = CourseEnrollment.objects.get_or_create(
            user=user, course=course, defaults={"progress": 0}
        )
        if user.badges.all().count() == 0:
            badge = Badge.objects.get(pk=1)
            badge.award_to_user(user)

        return JsonResponse({"data": "success"})
    return JsonResponse({"error": "Invalid request"}, status=400)


@method_decorator(csrf_exempt, name="dispatch")
class LoadContentView(LoginRequiredMixin, DetailView):
    model = Course
    context_object_name = "course"

    def get(self, request, *args, **kwargs):
        page_number = request.GET.get("page", 1)
        course = self.get_object()
        content_list = CourseContent.objects.filter(course=course)
        paginator = Paginator(content_list, 3)
        page_obj = paginator.get_page(page_number)

        content_html = render_to_string(
            "includes/course_content_partial.html", {"content_page_obj": page_obj}
        )
        return JsonResponse({"content_html": content_html})


class ContentDetailView(DetailView):
    model = CourseContent
    context_object_name = "content"
    template_name = "learn/content_detail.html"


@csrf_exempt
def mark_as_completed(request):
    if request.method == "POST":
        content_id = request.POST.get("content_id")
        course_id = request.POST.get("course_id")
        print("****************")

        try:
            print(request.user.first_name)
            enroll = CourseEnrollment.objects.filter(
                user=request.user, course=Course.objects.get(id=int(course_id))
            ).first()
            print("**********34")
            content = CourseContent.objects.get(id=int(content_id))
            print("$$$$$$$$$$$$$$$43")

            # Mark the content as completed
            enroll.completed_contents.add(content)

            # Update the percentage
            total_contents = CourseContent.objects.filter(
                course=Course.objects.get(id=int(course_id))
            ).count()
            completed_contents = enroll.completed_contents.all().count()
            new_percentage = (completed_contents / total_contents) * 100

            # Save the new percentage
            enroll.progress = int(new_percentage)
            enroll.save()
            print("#################")
            return JsonResponse({"success": True, "new_percentage": new_percentage})
        except CourseEnrollment.DoesNotExist or CourseContent.DoesNotExist:
            print("&&&&&&&&&&&&&&&")
            return JsonResponse({"success": False, "error": "Invalid IDs"})
    print("$$$$$$$$$$$$$$$$$")
    return JsonResponse({"success": False, "error": "Invalid request method"})
