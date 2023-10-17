import { Component,ViewChild,ElementRef} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonModal,AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private router: Router, public alertController : AlertController) {}

  public mensaje = ""

  public alertButtons = ['OK'];
  user = {
    usuario: "",
    password: "",
    confirmarpass: ""
  }
  
  async enviarInformacion() {
    if (this.user.usuario != "") {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      }
      this.router.navigate(['/login'], navigationExtras);
    } else {
      this.mensaje = "Porfavor ingrese sus credenciales.";
    }
  }
  async mostrarConsola() {
    console.log(this.user);
    if (this.user.usuario != "" && this.user.password != "") {
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
    if (this.user.usuario != "" && this.user.password != "" && this.user.password == this.user.confirmarpass) {
      this.mensaje = "Registro Exitoso.";
      this.modal.dismiss(null, 'confirmar');
    } else {
      const alert = await this.alertController.create({
        header: 'Formulario incompleto.',
        message: 'Porfavor complete todos los campos.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }

  async irarestablecer(){
    this.router.navigate(['restablecerpass'])
  }

}


