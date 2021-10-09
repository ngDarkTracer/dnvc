import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { SubscribeComponent } from './subscribe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import {TranslateModule} from '@ngx-translate/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    SubscribeComponent
  ],
    imports: [
      CommonModule,
      SubscribeRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      MultiSelectModule,
      ButtonModule,
      TranslateModule,
      ProgressSpinnerModule,
      DialogModule
    ]
})
export class SubscribeModule { }
