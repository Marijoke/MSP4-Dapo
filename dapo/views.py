from django.shortcuts import render

# Create your views here.
def welcome_to_dapo(request):
    return render(request, 'dapo/dapo_index.html')
