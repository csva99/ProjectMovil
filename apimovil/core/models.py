from django.db import models

# Create your models here.
class Usuario(models.Model):
    rut = models.CharField(max_length = 10, primary_key = True)
    nombre = models.CharField(max_length = 50, blank = False, null = False)
    apPaterno = models.CharField(max_length = 30, blank = False, null = False)
    apMaterno = models.CharField(max_length = 30, blank = False, null = False)
    FechaNacimiento = models.DateField(blank = False, null = False)
    correo = models.EmailField(unique = True, blank = False, null = False, max_length = 100)
    telefono = models.CharField(max_length = 10, blank = False, null = False)
    categorias = [('estudiante','Estudiante.'),
                            ('docente','Docente'),
                ]
    categoria = models.CharField(max_length=25,default= 'user', choices=categorias)
    tiposusuario = [('conductor','Conductor.'),
                            ('pasajero','Pasajero.'),
                ]
    tipousuario = models.CharField(max_length=25,default= 'user', choices=tiposusuario)

    def str(self):
        return str(self.nombre)+" "+str(self.apPaterno)+" "+str(self.apMaterno)