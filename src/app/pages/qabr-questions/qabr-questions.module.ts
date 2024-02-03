import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QabrQuestionsPageRoutingModule } from './qabr-questions-routing.module';

import { QabrQuestionsPage } from './qabr-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QabrQuestionsPageRoutingModule
  ],
  declarations: [QabrQuestionsPage]
})
export class QabrQuestionsPageModule {}
