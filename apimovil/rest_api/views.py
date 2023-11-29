from urllib import response
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from apimovil.core.models import Usuario
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

@csrf_exempt
@permission_classes([AllowAny])
def login(request):
    data = request.data
    email = data['email']
    password = data['password']
    try:
        usuario = Usuario.objects.get(email = email)
        except Usuario.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        if (usuario.password == password)
            response = {
                "perfil" : 1
            }
            return Response(response)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)