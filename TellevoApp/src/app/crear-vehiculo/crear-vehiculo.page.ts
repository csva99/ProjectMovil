import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ApiService } from '../servicios/api.service';


@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.page.html',
  styleUrls: ['./crear-vehiculo.page.scss'],
})
export class CrearVehiculoPage implements OnInit {

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


  anadirVehiculo() {
    const patente = this.vehiculo.patente
    const marca = this.vehiculo.marca
    const cantpasajeros = this.vehiculo.cantpasajeros
    const user = this.usuario
    this.api.generarVehiculo(patente,marca,cantpasajeros,user).subscribe(
      (response)=>{
        console.log(response);
        this.presentAlert('Vehiculo agregado correctamente.');
      },
      (error) => {
        console.log(error)
        this.presentAlert('Error: No se pudo añadir el vehiculo.');
      }
      );
  }

  cancelar(){
    this.router.navigate (['perfil-conductor'])
  }

}
