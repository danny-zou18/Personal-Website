from django.shortcuts import render
# Create your views here.

def home(request):
    return render(request, 'base/home.html')

def about(request):
    return render(request, 'about.html')

def socials(request):
    return render(request, 'socials.html')

def contact(request):
    return render(request, "contact.html")

def portfolio(request):
    return render(request, "portfolio.html")