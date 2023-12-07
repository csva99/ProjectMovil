from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from core.models import Usuario
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
    
