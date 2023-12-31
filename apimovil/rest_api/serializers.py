from rest_framework import serializers
from core.models import Usuario, Vehiculo, Viaje

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['password']

class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehiculo
        fields = ['patente','marca','cant_pasajeros', 'dueño']

class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields =['idViaje', 'hora', 'precio', 'patente_vehiculo']

