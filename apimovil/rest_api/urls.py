from django.urls import path
from rest_api.views import login, restablecerpass, generarvehiculo

urlpatterns=[
    path('login', login, name="Login"),
    path('restablecerpass', restablecerpass, name="Restablecer contraseña"),
    path('generarvehiculo', generarvehiculo, name="Generar vehiculo")
]