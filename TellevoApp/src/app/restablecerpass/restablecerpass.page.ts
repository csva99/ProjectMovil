import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecerpass',
  templateUrl: './restablecerpass.page.html',
  styleUrls: ['./restablecerpass.page.scss'],
})
export class RestablecerpassPage implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute, public alertController: AlertController) { 

  }

  public mensaje = "";

  public alertButtons = ['OK'];
  public user = {
    usuario: "",
    password: ""
  }

  public nuevapass = {
    correo: "",
    nueva: ""
  }

  ngOnInit() {

    this.activatedRouter.queryParams.subscribe(()=>{

      let state = this.router.getCurrentNavigation()?.extras.state;
      if(state){
        this.user.usuario = state ['user'].usuario;
        this.user.password = state ['user'].password;
        console.log(this.user);

      }

    })

  }

  async restablecer(){
    if(this.user.password != this.nuevapass.nueva){
      this.user.password = this.nuevapass.nueva;
      const alert = await this.alertController.create({
        header: 'Contraseña restablecida.',
        message: 'Su contraseña ha sido restablecida.',
        buttons: ['Aceptar'],
      });
      await alert.present();
      this.router.navigate(['home'])
    }else{
      const alert = await this.alertController.create({
        header: 'Error.',
        message: 'Su nueva contraseña no puede ser igual a la anterior.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }

    }
}


