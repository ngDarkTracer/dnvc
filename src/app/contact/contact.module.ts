import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {DialogModule} from 'primeng/dialog';
import {TranslateModule} from '@ngx-translate/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent
  ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        DialogModule,
        TranslateModule,
        ButtonModule,
        CardModule,
        ReactiveFormsModule
    ]
})
export class ContactModule { }
