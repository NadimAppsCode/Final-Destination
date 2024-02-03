import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HadithPage } from './hadith.page';

const routes: Routes = [
  {
    path: '',
    component: HadithPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HadithPageRoutingModule {}
