import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


interface User{
  username: string;
  password: string;
  confirmarpass: string;
}

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  public autenticado!: boolean;

  private local!: Storage;

  constructor(private storage: Storage, private route: Router) {
    this.init()
  }
  async init() {
    const storage = await this.storage.create();
    this.local = storage;
  }


  async register(username: string, password: string, confirmarpass: string): Promise<boolean>{
    const users = await this.local?.get('users') || [];
    const existe = users.find((us: User) => us.username === username && us.password === password && us.confirmarpass === confirmarpass) ;
    if(existe){
      console.log("usuario ya existe")
      return true;
    }else{
      const nuevo: User = { username, password, confirmarpass};
      users.push(nuevo);
      await this.local.set('users', users);
      console.log("Registro exitoso");
      return false;
    }
  }

  async login(username: string, password: string): Promise<boolean>{
    const users: User[] = (await this.local.get('users')) || [];
    const user = users.find((us: User) => us.username === username && us.password === password); 
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

