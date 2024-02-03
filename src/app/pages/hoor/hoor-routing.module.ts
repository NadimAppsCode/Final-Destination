import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoorPage } from './hoor.page';

const routes: Routes = [
  {
    path: '',
    component: HoorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoorPageRoutingModule {}
