import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomsModalPage } from './symptoms-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomsModalPageRoutingModule {}
