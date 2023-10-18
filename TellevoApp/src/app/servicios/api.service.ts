import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';


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

  //Listar
  listarPost(): Observable<any> {
    return this.http.get(this.apiURL + "/lista_usuarios").pipe(
      retry(3)
    )
  }
}
