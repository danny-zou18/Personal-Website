from django.shortcuts import render
from .models import Contact
from django.http import HttpResponse
from django.core.mail import send_mail
# Create your views here.

def home(request):
    return render(request, 'base/index.html')

def about(request):
    return render(request, 'base/about.html')

def socials(request):
    return render(request, 'base/socials.html')

def contact(request):
    if request.method=="POST":
        contact = Contact()
        name=request.POST.get('name')
        email=request.POST.get('email')
        subject=request.POST.get('subject')
        message=request.POST.get('message')

        contact.name=name
        contact.email=email
        contact.subject=subject
        contact.message=message

        contact.save()
    return render(request, "base/contact.html")

def portfolio(request):
    return render(request, "base/portfolio.html")
    