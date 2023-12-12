import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiURL = 'http://127.0.0.1:8000/api';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-type': "application/json",
      "Access-Control-Allow-Origin": "*"
    })
    
  }
  constructor(private http: HttpClient) { }

  enviarCred(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(this.apiURL + '/login', body);
  }

  restablecerPass(email: string, password: string): Observable<any> {
    const body = { email, password };
    console.log(body)
    return this.http.put(this.apiURL + '/restablecerpass', body);
  }

  generarVehiculo(patente: string, marca: string, cantpasajeros: string, user: string): Observable<any>{
    const body ={ patente, marca, cantpasajeros, user
    };
    return this.http.put(this.apiURL + '/generarvehiculo', body)
  }

  // generarViaje(): Observable<any>{
    
  //   return this.http.put(this)
  // }

}