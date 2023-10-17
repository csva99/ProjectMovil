import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerpassPageRoutingModule } from './restablecerpass-routing.module';

import { RestablecerpassPage } from './restablecerpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerpassPageRoutingModule
  ],
  declarations: [RestablecerpassPage]
})
export class RestablecerpassPageModule {}
