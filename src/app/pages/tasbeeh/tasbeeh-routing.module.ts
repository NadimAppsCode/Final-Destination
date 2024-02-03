import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasbeehPage } from './tasbeeh.page';

const routes: Routes = [
  {
    path: '',
    component: TasbeehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasbeehPageRoutingModule {}
