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

  obtenerTipouser(email: string): Observable<any>{
    return this.http.get(this.apiURL+'/tipouser' + email)
    .pipe(retry(3));
  }
}