#from django.shortcuts import render
from django.http import HttpResponse
#from .models import Chef


def index(request):
    return HttpResponse(request ,"map.html")
