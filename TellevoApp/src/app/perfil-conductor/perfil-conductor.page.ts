import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-perfil-conductor',
  templateUrl: './perfil-conductor.page.html',
  styleUrls: ['./perfil-conductor.page.scss'],
})
export class PerfilConductorPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  constructor(private api: ApiService, public alertController: AlertController, private router : Router) { }

  public mensaje = "";

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }

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

  usuario : string = '';
  vehiculo = {
    patente : '',
    marca : '',
    cantpasajeros : '',
  }
  
  ngOnInit() {
    const usuarioFromLocalStorage = localStorage.getItem('usuario');
    if (usuarioFromLocalStorage !== null) {
      this.usuario = usuarioFromLocalStorage;
    }
  }

  iragenvehiculos(){
    this.router.navigate(['crear-vehiculo'])
  }

}
