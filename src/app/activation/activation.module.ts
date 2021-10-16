import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationRoutingModule } from './activation-routing.module';
import { ActivationComponent } from './activation.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {RippleModule} from 'primeng/ripple';


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
        TranslateModule,
        ReactiveFormsModule,
        MultiSelectModule,
        DropdownModule,
        RippleModule
    ]
})
export class ActivationModule { }
