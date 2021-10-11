import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationRoutingModule } from './activation-routing.module';
import { ActivationComponent } from './activation.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    ActivationComponent
  ],
  imports: [
    CommonModule,
    ActivationRoutingModule,
    ProgressSpinnerModule,
    DialogModule,
    ButtonModule,
    TranslateModule
  ]
})
export class ActivationModule { }
