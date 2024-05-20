from django.shortcuts import render
from apps.coarse.models import Coarse
from django.views.generic.detail import  DetailView
from django.views.generic.list import  ListView
from apps.coarse.models import Coarse
from django.contrib.auth.mixins import LoginRequiredMixin


class LearnListView(LoginRequiredMixin, ListView):
    login_url = '/account/login/'
    redirect_field_name ='redirect_to'

    model = Coarse

    template_name = 'learn/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["user"] = self.request.user
        context["page_name"] = 'Home'
        context["coarses"] = Coarse.objects.all()
        return context
    
