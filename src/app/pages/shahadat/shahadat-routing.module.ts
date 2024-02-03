import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShahadatPage } from './shahadat.page';

const routes: Routes = [
  {
    path: '',
    component: ShahadatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShahadatPageRoutingModule {}
