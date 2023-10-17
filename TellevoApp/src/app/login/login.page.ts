import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, public alertController: AlertController) { }

  public mensaje = "";

  public alertButtons = ['OK'];
  public user = {
    usuario: "",
    password: ""
  }
  public informacion = {
    nombre: "",
    apellido: "",
    auto: "",
    fecha: ""
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.usuario = state['user'].usuario;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    })
  }

  async guardar(){
    if (this.informacion.nombre != "" && this.informacion.apellido != "" && this.informacion.auto != "" && this.informacion.fecha != "") {
      const alert = await this.alertController.create({
        header: 'Cambio Exitoso.',
        message: 'Se guardaron los cambios realizados.',
        buttons: ['Aceptar'],
      });
      await alert.present();
      localStorage.setItem("Datos", JSON.stringify(this.informacion));
    } else {
      const alert = await this.alertController.create({
        header: 'Formulario incompleto.',
        message: 'Porfavor complete todos los campos.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }

  salir(){
    this.router.navigate(['home']);
    localStorage.removeItem("Datos");
    this.modal.dismiss(null, 'salir');
  }

}
