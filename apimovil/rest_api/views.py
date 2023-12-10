from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from core.models import Usuario
from .serializers import UsuarioSerializer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import parser_classes

@api_view(['POST'])
@parser_classes([JSONParser])
def login(request):
    data = request.data
    email = data['email']
    password = data['password']
    try:
        usuario = Usuario.objects.get(email = email)
        tipousuario = usuario.tipouser.id
    except Usuario.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if (usuario.password == password):
        return Response(tipousuario)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
@api_view(['PUT'])
def restablecerpass(request):
    data = request.data
    email = data['email']
    password = data['password']
    try:
        usuario = Usuario.objects.get(email = email)
    except Usuario.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if (usuario.password != password):
        serializer = UsuarioSerializer(usuario, data = data)
        if serializer.is_valid():
            serializer.save()
            print("Si")
        return Response (status=status.HTTP_200_OK)
    else:
        return Response (status=status.HTTP_400_BAD_REQUEST)