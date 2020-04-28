import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectPositionPageRoutingModule } from './collect-position-routing.module';

import { CollectPositionPage } from './collect-position.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectPositionPageRoutingModule
  ],
  declarations: [CollectPositionPage]
})
export class CollectPositionPageModule {}
