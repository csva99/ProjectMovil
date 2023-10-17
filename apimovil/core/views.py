from django.shortcuts import render
from .models import Usuario
# Create your views here.

def home(request):
    usuarios = Usuario.objects.all()

    datos = {
        'usuarios' : usuarios
    }

    return render(request,)

