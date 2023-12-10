import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ViewChild,ElementRef } from '@angular/core';

declare var google : any;

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  map : any;

  @ViewChild('map', { read: ElementRef, static: false })
  mapRef: ElementRef;

  constructor(public geolocation: Geolocation) { }

  ngOnInit() {
  }

  mostrarmapa(){
    const location = new google.map.Latlng(this.getCurrentLocation)
    console.log (location)
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
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

  ionViewDidEnter(){
    this.mostrarmapa
  }

  generarViaje(){

  }

}