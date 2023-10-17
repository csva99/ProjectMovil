from django.urls import path
from rest_api.views import lista_usuarios

urlpatterns=[
    path('lista_usuarios', lista_usuarios, name="Lista Usuarios"),
]