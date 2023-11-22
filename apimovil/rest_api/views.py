from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

@csrf_exempt
@permission_classes([AllowAny])
def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            # El usuario ha sido autenticado correctamente
            return HttpResponse('Autenticación exitosa')
        else:
            # El usuario no ha sido autenticado correctamente
            return HttpResponse('Autenticación fallida')
    else:
        # Renderiza tu formulario de inicio de sesión
        return render(request, 'home.html')