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

  Obtenercred() : Observable<any>{
    return this.http.get(this.apiURL + "/datosuser")
    .pipe(retry(3));
  }


  enviarcred(email: string, password: string): Observable<any> {
    const body = { email, password };
    
    const csrfToken = this.getCookie('csrftoken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken,
    });

    return this.http.post(this.apiURL + '/login_view', body, { headers });
  }

  private getCookie(name: string, defaultValue: string = ''): string {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop();
      return cookieValue ? cookieValue.split(';').shift() || defaultValue : defaultValue;
    }
    return defaultValue;
  }

  //Obtener un usuario
  Obtenernick(): Observable<any>{
    return this.http.get(this.apiURL+ "/obteneruser")
    .pipe(retry(3));
  }

  Obtenerpass(): Observable<any>{
    return this.http.get(this.apiURL + "/obtenerpass")
    .pipe(retry(3));
  }  
}