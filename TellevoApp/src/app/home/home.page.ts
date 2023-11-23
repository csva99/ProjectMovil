import { Component,ViewChild,ElementRef} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonModal,AlertController } from '@ionic/angular';

import { AutenticacionService } from '../servicios/autenticacion.service';
import { ApiService } from '../servicios/api.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private router: Router, public alertController : AlertController, private auth: AutenticacionService, private api: ApiService) {}

  public mensaje = ""
  public estado: String = "";

  public alertButtons = ['OK'];
  user = {
    mail: "",
    password: "",
    confirmarpass: ""
  }

  cred : any = {
    mail : "",
    password : ""
  }

  enviarInformacion() {
    console.log(this.cred)
    console.log(this.cred.password)
    const email = this.cred.mail
    const password = this.cred.password
    this.api.enviarcred(email,password).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
      },
      (error) => {
        console.log(Response)
        console.error('Codigo de estado HTTP:', error.status);
        console.error('Error en el login:', error);
      }
    );
  }


  async mostrarConsola() {
    console.log(this.user);
    if (this.user.mail != "" && this.user.password != "") {
      this.mensaje = "Usuario Conectado.";
    } else {
      const alert = await this.alertController.create({
        header: 'Credenciales incorrectas.',
        message: 'Usuario y/o contraseña incorrecto(s).',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  async confirm() {
    this.auth.register(this.user.mail, this.user.password, this.user.confirmarpass).then((a: any)=> {
      if(a){
        this.estado = "Correo ya existe";
      }else{
        this.mensaje = "Registro exitoso";
        this.modal.dismiss(this.user.mail, 'confirm');
      }
    })
  } 

   /* async confirm() {
    if (this.user.usuario != "" && this.user.password != "" && this.user.password == this.user.confirmarpass ) {
      this.estado = "Usuario ya existe.";
      this.modal.dismiss(null, 'confirmar');
    } else {
      const alert = await this.alertController.create({
        header: 'Formulario incompleto.',
        message: 'Porfavor complete todos los campos.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }  */

  async irarestablecer(){
    this.router.navigate(['restablecerpass'])
  }

}


