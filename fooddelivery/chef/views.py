from django.shortcuts import render
from django.http import HttpResponse
from .models import Chef


def index(request):
    chef_names = Chef.objects.all()
    return render(request,'chef/index.html',{'chef_names':chef_names})
def snake(request):
    return render(request,'chef/snake.html',None)
def chefs(request):
    chef_names = Chef.objects.all()
    return render(request,'chef/chefs.html',{'chef_names':chef_names})