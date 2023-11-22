import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor(public geolocation: Geolocation) { }

  ngOnInit() {
  }



  async getCurrentLocation() {
    try {
      // Obtener la posición actual
      const position = await Geolocation.getCurrentPosition();

      // Convertir la posición a GeolocationPosition
      const coordinates: GeolocationPosition = {
        coords: {
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude,
          altitudeAccuracy: position.coords.altitudeAccuracy || null,
          heading: position.coords.heading || null,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          speed: position.coords.speed || null,
        },
        timestamp: position.timestamp,
      };

      // Acceder a las coordenadas
      const latitude = coordinates.coords.latitude;
      const altitude = coordinates.coords.longitude;

      // Mostrar las coordenadas en la consola (puedes mostrarlas de la manera que prefieras)
      console.log('Latitud: ' + latitude);
      console.log('Altitud: ' + altitude);

      // Aquí puedes realizar otras acciones con las coordenadas, como mostrarlas en un mapa, etc.
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
    }
  }

}