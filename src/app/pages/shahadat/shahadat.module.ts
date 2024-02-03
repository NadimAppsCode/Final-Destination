import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShahadatPageRoutingModule } from './shahadat-routing.module';

import { ShahadatPage } from './shahadat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShahadatPageRoutingModule
  ],
  declarations: [ShahadatPage]
})
export class ShahadatPageModule {}
