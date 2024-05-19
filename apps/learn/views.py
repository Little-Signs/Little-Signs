from django.shortcuts import render
from apps.coarse.models import Coarse
from django.views.generic.detail import  DetailView
from apps.coarse.models import Coarse

def index(request):

    coarses = Coarse.objects.all()

    context = {
        "coarses": coarses
    }

    return render(request, 'learn/home.html',context)

class LearnDetailView(DetailView):

    model = Coarse

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["fh"] = ""
        return context
    
