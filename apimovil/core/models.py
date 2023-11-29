from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UsuarioManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El campo de correo electrónico debe ser proporcionado')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser debe tener is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser debe tener is_superuser=True.')

        return self.create_user(email, password, extra_fields)

class Tipousuario(models.Model):
    id = models.IntegerField(primary_key=True)
    nombretipouser = models.CharField(unique=True, max_length=50, verbose_name="Nombre tipo de usuario")

    def str(self):
        return self.nombretipouser

class Usuario(models.Model):

    email = models.EmailField(primary_key=True, unique=True)
    tipouser = models.ForeignKey(Tipousuario.nombretipouser, null=True, verbose_name="Tipo de usuario", on_delete=models.CASCADE)

    def str(self):
        return self.email
    
class Vehiculo(models.Model):
    patente = models.CharField(primary_key=True, max_length=50, verbose_name="Patente")
    marca = models.CharField(max_length=20, verbose_name="Marca auto")
    cant_pasajeros = models.CharField(max_length=4, verbose_name="Cantidad de pasajeros")

    def str(self):
        return self.patente
    
class Viaje(models.Model):
    idViaje = models.IntegerField(primary_key=True, max_length=2, verbose_name="Id del Viaje")
    hora = models.CharField(max_length=5, verbose_name="Hora del Viaje")
    precio = models.CharField(max_length=6, verbose_name="Precio del viaje")
    patente_vehiculo = models.ForeignKey(Vehiculo.patente, verbose_name="Patente Vehiculo")
    cant_pasajeros = models.ForeignKey(Vehiculo.cant_pasajeros,  verbose_name="Patente Vehiculo")

    def str(self):
        return self.idViaje
    
class Usuario_Viaje(models.Model):
    idUsario_viaje = models.CharField(primary_key=True, max_length=3, null=False)
    email_user = models.ForeignKey(Usuario.email, verbose_name="Email del Usuario")
    idViaje = models.ForeignKey(Viaje.idViaje, verbose_name="ID del Viaje")

    def str(self):
        return self.idUsario_viaje