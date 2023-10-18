import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  async listar(){
    this.api.listarPost().subscribe(
      (usuarios)=>{
        console.log(usuarios);
      }
      ,
      (error)=>{
        console.log(error);
      }
    )
  }
}
