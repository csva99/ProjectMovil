from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from core.models import Usuario, Vehiculo
from .serializers import UsuarioSerializer, VehiculoSerializer
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
    
# @api_view(['GET'])
# def mostrarinfouser(request):



@api_view(['PUT'])
def generarvehiculo(request):
    data = request.data
    id = data['patente']
    print(f'Datos recibidos: {data}')
    print(Vehiculo.objects.filter(patente=id).query)

    vehiculo = Vehiculo.objects.filter(patente=id).first()
    
    if vehiculo is not None:
        return Response("Vehiculo ya registrado", status=status.HTTP_400_BAD_REQUEST)
    data = JSONParser().parse(request)
    serializer = VehiculoSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        print("Vehiculo registrado con éxito")
        return Response(status=status.HTTP_201_CREATED)
    else:
        return Response("Error al registrar el vehiculo" ,status=status.HTTP_400_BAD_REQUEST)

