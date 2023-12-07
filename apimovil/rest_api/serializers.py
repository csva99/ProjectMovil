from rest_framework import serializers
from core.models import Usuario, Vehiculo, Viaje

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['tipouser']

class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehiculo
        fields = ['patente','marca','cant_pasajeros']

class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields =['idViaje', 'hora', 'precio', 'patente_vehiculo', 'cant_pasajeros']

