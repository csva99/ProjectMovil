from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class Tipousuario(models.Model):
    id = models.IntegerField(primary_key=True)
    nombretipouser = models.CharField(unique=True, max_length=50, verbose_name="Nombre tipo de usuario")

    def str(self):
        return self.nombretipouser

class Usuario(models.Model):

    email = models.EmailField(primary_key=True, unique=True, verbose_name="Correo")
    nombre = models.CharField(max_length=50, verbose_name="Nombre de usuario")
    password = models.CharField(max_length=50, verbose_name="Contraseña")
    tipouser = models.ForeignKey(Tipousuario, null=True, verbose_name="Tipo de usuario", on_delete=models.CASCADE)

    def str(self):
        return self.email
    
class Vehiculo(models.Model):
    patente = models.CharField(primary_key=True, max_length=50, verbose_name="Patente")
    marca = models.CharField(max_length=20, verbose_name="Marca auto")
    cant_pasajeros = models.CharField(max_length=4, verbose_name="Cantidad de pasajeros")

    def str(self):
        return self.patente
    
class Viaje(models.Model):
    idViaje = models.IntegerField(primary_key=True, verbose_name="Id del Viaje")
    hora = models.IntegerField(verbose_name="Hora del Viaje")
    precio = models.IntegerField(verbose_name="Precio del viaje")
    patente_vehiculo = models.ForeignKey(Vehiculo, verbose_name="Patente Vehiculo", on_delete=models.CASCADE)
    pasajero = models.ForeignKey(Usuario, verbose_name="Id Usuario", on_delete=models.CASCADE)

    def str(self):
        return self.idViaje
    
