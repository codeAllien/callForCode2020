import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectPositionPage } from './collect-position.page';

const routes: Routes = [
  {
    path: '',
    component: CollectPositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectPositionPageRoutingModule {}
