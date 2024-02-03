import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JanazahPageRoutingModule } from './janazah-routing.module';

import { JanazahPage } from './janazah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JanazahPageRoutingModule
  ],
  declarations: [JanazahPage]
})
export class JanazahPageModule {}
