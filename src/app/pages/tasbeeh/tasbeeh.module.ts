import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasbeehPageRoutingModule } from './tasbeeh-routing.module';

import { TasbeehPage } from './tasbeeh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasbeehPageRoutingModule
  ],
  declarations: [TasbeehPage]
})
export class TasbeehPageModule {}
