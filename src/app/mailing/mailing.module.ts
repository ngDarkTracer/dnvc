import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailingRoutingModule } from './mailing-routing.module';
import { MailingComponent } from './mailing.component';


@NgModule({
  declarations: [
    MailingComponent
  ],
  imports: [
    CommonModule,
    MailingRoutingModule
  ]
})
export class MailingModule { }
