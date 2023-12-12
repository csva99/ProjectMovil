import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../servicios/api.service';
import { FormControl,FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-restablecerpass',
  templateUrl: './restablecerpass.page.html',
  styleUrls: ['./restablecerpass.page.scss'],
})
export class RestablecerpassPage implements OnInit {

  formularioRestablecer: FormGroup;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, public alertController: AlertController, private api: ApiService, private fb: FormBuilder ) { 
    this.formularioRestablecer = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public alertButtons = ['OK'];
  public user = {
    usuario: "",
    password: ""
  }
  
  nuevapass = {
    correo: "",
    nueva: "",
    confirmar:""
  }

  public mensaje = "";

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }

  restablecer(){
    const email = this.nuevapass.correo
    const password = this.nuevapass.nueva
    const confirmarpass = this.nuevapass.confirmar
    if (password == confirmarpass) {
      this.api.restablecerPass(email, password).subscribe(
        (response) => {
          console.log(Response);
          this.presentAlert('Contraseña restablecida exitosamente.');
          this.router.navigate(['home'])
        },
        (error) => {
          console.log(Response)
          this.presentAlert('Error: La nueva contraseña no puede ser igual a una contraseña antigua.');
        }
      );
    }else{
      this.presentAlert('Error: Las contraseñas no coinciden.');
    }

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

  irHome(){
    this.router.navigate(['home'])
  }


}


