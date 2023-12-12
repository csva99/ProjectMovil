import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

declare var google: any;
declare const window: {
  initMap?: () => void;
};

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage  {

  constructor(public geolocation: Geolocation) { }

  @ViewChild('map', { static: true })
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

ngOnInit() {
  window['initMap'] = () => {
    this.createMap();
    this.getCurrentLocation();
  };
}


  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }

  async getCurrentLocation() {
    try {

      const position = await Geolocation.getCurrentPosition();
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

      const latitude = coordinates.coords.latitude;
      const altitude = coordinates.coords.longitude;

      console.log('Latitud: ' + latitude);
      console.log('Altitud: ' + altitude);

    } catch (error) {
      console.error('Error al obtener la ubicación', error);
    }
  }

  generarViaje(){
    
  }

}