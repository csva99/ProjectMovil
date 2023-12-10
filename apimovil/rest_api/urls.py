from django.urls import path
from rest_api.views import login, restablecerpass

urlpatterns=[
    path('login', login, name="Login"),
    path('restablecerpass', restablecerpass, name="Restablecer contraseña"),
]