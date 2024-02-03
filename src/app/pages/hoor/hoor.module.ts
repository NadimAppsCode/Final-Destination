import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoorPageRoutingModule } from './hoor-routing.module';

import { HoorPage } from './hoor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoorPageRoutingModule
  ],
  declarations: [HoorPage]
})
export class HoorPageModule {}
