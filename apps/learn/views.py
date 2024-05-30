from django.shortcuts import render, get_object_or_404
from .models import Coarse ,CoarseContent,CoarseEnrollment
from apps.users.models import User
from django.views.decorators.csrf import csrf_exempt
from django.views.generic.detail import  DetailView
from django.views.generic.list import  ListView
from django.utils import timezone
from .models import Coarse ,Badge
from django.http import JsonResponse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.paginator import Paginator
from django.utils.decorators import method_decorator
from django.template.loader import render_to_string


class LearnListView(LoginRequiredMixin, ListView):
    login_url = '/account/login/'
    redirect_field_name ='next'
    model = Coarse
    context_object_name = 'coarses'
    template_name = 'learn/home.html'
    paginate_by = 2

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["user"] = self.request.user
        context["page_name"] = 'Home'
        return context

class LearnDetailView(LoginRequiredMixin, DetailView):
    login_url = '/account/login/'
    redirect_field_name ='next'
    model = Coarse
    context_object_name ='coarse'
    template_name = "learn/coarse_detail.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        is_enrolled= CoarseEnrollment.is_user_enrolled(self.request.user, self.get_object())
        context["now"] = timezone.now()
        context["page_name"] = f'Learning {self.get_object().name}'
        context["other_coarses"] = Coarse.objects.all().exclude(pk=self.get_object().pk)
        context["badges"] = self.request.user.badges.all()
        if is_enrolled:
            context["enrollement"] = CoarseEnrollment.objects.filter(user=self.request.user,coarse=self.get_object()).first()
            content_list = CoarseContent.objects.filter(coarse=self.get_object())
            paginator = Paginator(content_list, 3)  # Show 3 contents per page
            page_number = self.request.GET.get('page', 1)
            page_obj = paginator.get_page(page_number)
            context["content_page_obj"] = page_obj
            context["content_list"] = content_list
        
        return context
    
@csrf_exempt
def enroll_user(request):
    if request.method == 'POST':
        coarse_id = request.POST.get('coarse')
        user_id = request.POST.get('user')

        coarse = get_object_or_404(Coarse, id=coarse_id)
        user = get_object_or_404(User, pk=user_id)

        user_enrollment, created = CoarseEnrollment.objects.get_or_create(
            user=user,
            coarse=coarse,
            defaults={'progress': 0}
        )
        if user.badges.all().count() == 0:
            badge = Badge.objects.get(pk=1)
            badge.award_to_user(user)

        return JsonResponse({'data': 'success'})
    return JsonResponse({'error': 'Invalid request'}, status=400)

@method_decorator(csrf_exempt, name='dispatch')
class LoadContentView(LoginRequiredMixin, DetailView):
    model = Coarse
    context_object_name = 'coarse'

    def get(self, request, *args, **kwargs):
        page_number = request.GET.get('page', 1)
        coarse = self.get_object()
        content_list = CoarseContent.objects.filter(coarse=coarse)
        paginator = Paginator(content_list, 3)
        page_obj = paginator.get_page(page_number)

        content_html = render_to_string('learn/coarse_content_partial.html', {'content_page_obj': page_obj})
        return JsonResponse({'content_html': content_html})
    
class ContentDetailView(DetailView):
    model = CoarseContent
    context_object_name = 'content'
    template_name = 'learn/content_detail.html'