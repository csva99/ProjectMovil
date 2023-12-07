from django.urls import path
from rest_api.views import login

urlpatterns=[
    path('login', login, name="Login"),

]