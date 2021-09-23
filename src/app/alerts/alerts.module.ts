import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsComponent } from './alerts.component';
import {PrimengModule} from '../primeModule/primeng.module';


@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    CommonModule,
    AlertsRoutingModule,
    PrimengModule,
  ]
})
export class AlertsModule { }
