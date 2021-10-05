import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { SubscribeComponent } from './subscribe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    SubscribeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule
  ]
})
export class SubscribeModule { }
