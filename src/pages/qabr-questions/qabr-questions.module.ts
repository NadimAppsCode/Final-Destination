import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QabrQuestionsPage } from './qabr-questions';

@NgModule({
  declarations: [
    QabrQuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(QabrQuestionsPage),
  ],
})
export class QabrQuestionsPageModule {}
