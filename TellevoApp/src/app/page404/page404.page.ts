import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.page.html',
  styleUrls: ['./page404.page.scss'],
})
export class Page404Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async irHome(){
    this.router.navigate(['home'])

  }

}
