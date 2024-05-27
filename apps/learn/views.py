from django.shortcuts import render
from .models import Coarse
from django.views.generic.detail import  DetailView
from django.views.generic.list import  ListView
from django.utils import timezone
from .models import Coarse
from django.contrib.auth.mixins import LoginRequiredMixin


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

class LearnDetailView(DetailView):
    model = Coarse
    context_object_name ='coarse'
    template_name = "learn/coarse_detail.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["now"] = timezone.now()
        context["page_name"] = f'Learning {self.get_object().name}'
        return context
    
    

