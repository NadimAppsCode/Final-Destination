import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JanazahPage } from './janazah.page';

const routes: Routes = [
  {
    path: '',
    component: JanazahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JanazahPageRoutingModule {}
