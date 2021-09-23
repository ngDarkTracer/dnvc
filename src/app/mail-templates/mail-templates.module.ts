import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailTemplatesRoutingModule } from './mail-templates-routing.module';
import { MailTemplatesComponent } from './mail-templates.component';


@NgModule({
  declarations: [
    MailTemplatesComponent
  ],
  imports: [
    CommonModule,
    MailTemplatesRoutingModule
  ]
})
export class MailTemplatesModule { }
