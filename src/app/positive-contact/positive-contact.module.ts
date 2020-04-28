import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PositiveContactPageRoutingModule } from './positive-contact-routing.module';

import { PositiveContactPage } from './positive-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PositiveContactPageRoutingModule
  ],
  declarations: [PositiveContactPage]
})
export class PositiveContactPageModule {}
