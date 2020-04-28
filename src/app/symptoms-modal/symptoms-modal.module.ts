import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsModalPageRoutingModule } from './symptoms-modal-routing.module';

import { SymptomsModalPage } from './symptoms-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsModalPageRoutingModule
  ],
  declarations: [SymptomsModalPage]
})
export class SymptomsModalPageModule {}
