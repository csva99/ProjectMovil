import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


interface User{
  email: string;
  password: string;
  confirmarpass: string;
}

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  guardarAutenticacion(success: any) {
    throw new Error('Method not implemented.');
  }
  public autenticado!: boolean;

  private local!: Storage;

  constructor(private storage: Storage, private route: Router) {
    this.init()
  }
  async init() {
    const storage = await this.storage.create();
    this.local = storage;
  }


  async register(email: string, password: string, confirmarpass: string): Promise<boolean>{
    const users = await this.local?.get('users') || [];
    const existe = users.find((us: User) => us.email === email && us.password === password && us.confirmarpass === confirmarpass) ;
    if(existe){
      console.log("usuario ya existe")
      return true;
    }else{
      const nuevo: User = { email, password, confirmarpass};
      users.push(nuevo);
      await this.local.set('users', users);
      console.log("Registro exitoso");
      return false;
    }
  }

  async login(email: string, password: string): Promise<boolean>{
    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find((us: User) => us.email === email && us.password === password); 
    if (user){
      this.autenticado = true;
      return true;
    }
    this.autenticado = false;
    return false;
  }

  logout(){
    this.autenticado = false;
    this.route.navigate(['/home']);
  }
  
}

