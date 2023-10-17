import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablecerpassPage } from './restablecerpass.page';

const routes: Routes = [
  {
    path: '',
    component: RestablecerpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablecerpassPageRoutingModule {}
