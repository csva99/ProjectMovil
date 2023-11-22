from django.urls import path
from rest_api.views import login_view

urlpatterns=[
    path('login_view', login_view, name="Login"),

]