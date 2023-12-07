import { Component,ViewChild,ElementRef, OnInit} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonModal,AlertController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule module

import { AutenticacionService } from '../servicios/autenticacion.service';
import { ApiService } from '../servicios/api.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  @ViewChild(IonModal) modal!: IonModal;

  formularioLogin: FormGroup;

  constructor(private router: Router, public alertController : AlertController, private auth: AutenticacionService, private api: ApiService,private fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public mensaje = ""
  public estado: String = "";

  public alertButtons = ['OK'];
  user = {
    email: "",
    password: "",
    confirmarpass: ""
  }

  cred = {
    mail : "",
    password:  ""
  }

  enviarInformacion() {
    const email = this.cred.mail
    const password = this.cred.password
    this.api.enviarCred(email,password).subscribe(
      (response) => {
        console.log("Login exitoso");
        if (response == 1) {
          this.router.navigate(['pasajero'])
        }if (response == 2) {
          this.router.navigate(['conductor'])
        }
      },
      (error) => {
        console.log(Response)
        console.error('Codigo de estado HTTP:', error.status);
        console.error('Error en el login:', error);
      }
    );
  } 



  /*
  async mostrarConsola() {
    console.log(this.user);
    if (this.user.email != "" && this.user.qpassword != "") {
      this.mensaje = "Usuario Conectado.";
    } else {
      const alert = await this.alertController.create({
        header: 'Credenciales incorrectas.',
        message: 'Usuario y/o contraseña incorrecto(s).',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }  */

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  async confirm() {
    this.auth.register(this.user.email, this.user.password, this.user.confirmarpass).then((a: any)=> {
      if(a){
        this.estado = "Correo ya existe";
      }else{
        this.mensaje = "Registro exitoso";
        this.modal.dismiss(this.user.email, 'confirm');
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




