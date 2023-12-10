import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../servicios/api.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  

  public mensaje = "";

  public alertButtons = ['OK'];
  public user = {
    usuario: "",
    password: ""
  }

  nuevapass = {
    correo: "",
    nueva: ""
  }
  restablecer(){
    const email = this.nuevapass.correo
    const password = this.nuevapass.nueva
    console.log(this.nuevapass)
    this.api.restablecerPass(email, password).subscribe(
      (response) => {
        console.log(Response);
      },
      (error) => {
        console.log('Error estoy aqui:' + Response)
      }
    );
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


}


