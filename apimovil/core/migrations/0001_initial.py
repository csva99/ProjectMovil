# Generated by Django 4.2.7 on 2023-12-12 03:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Tipousuario",
            fields=[
                ("id", models.IntegerField(primary_key=True, serialize=False)),
                (
                    "nombretipouser",
                    models.CharField(
                        max_length=50,
                        unique=True,
                        verbose_name="Nombre tipo de usuario",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Usuario",
            fields=[
                (
                    "email",
                    models.EmailField(
                        max_length=254,
                        primary_key=True,
                        serialize=False,
                        unique=True,
                        verbose_name="Correo",
                    ),
                ),
                (
                    "nombre",
                    models.CharField(max_length=50, verbose_name="Nombre de usuario"),
                ),
                (
                    "password",
                    models.CharField(max_length=50, verbose_name="Contraseña"),
                ),
                (
                    "tipouser",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="core.tipousuario",
                        verbose_name="Tipo de usuario",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Vehiculo",
            fields=[
                (
                    "patente",
                    models.CharField(
                        max_length=6,
                        primary_key=True,
                        serialize=False,
                        verbose_name="Patente",
                    ),
                ),
                ("marca", models.CharField(max_length=20, verbose_name="Marca auto")),
                (
                    "cant_pasajeros",
                    models.CharField(
                        max_length=4, verbose_name="Cantidad de pasajeros"
                    ),
                ),
                (
                    "dueño",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="core.usuario",
                        verbose_name="Dueño vehiculo",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Viaje",
            fields=[
                (
                    "idViaje",
                    models.IntegerField(
                        primary_key=True, serialize=False, verbose_name="Id del Viaje"
                    ),
                ),
                ("hora", models.IntegerField(verbose_name="Hora del Viaje")),
                ("precio", models.IntegerField(verbose_name="Precio del viaje")),
                (
                    "pasajero",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="core.usuario",
                        verbose_name="Id Usuario",
                    ),
                ),
                (
                    "patente_vehiculo",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="core.vehiculo",
                        verbose_name="Patente Vehiculo",
                    ),
                ),
            ],
        ),
    ]
