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

class Usuario(AbstractBaseUser):

    email = models.EmailField(primary_key=True, unique=True)
    tipouser = models.ForeignKey(Tipousuario, null=True, verbose_name="Tipo de usuario", on_delete=models.CASCADE)
    # Otros campos que desees agregar a tu modelo de usuario
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UsuarioManager()

    USERNAME_FIELD = 'email'
    # Otros campos requeridos para el registro de usuario, si los hay

    def str(self):
        return self.email