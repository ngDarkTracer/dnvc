import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailTemplatesComponent } from './mail-templates.component';

const routes: Routes = [{ path: '', component: MailTemplatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailTemplatesRoutingModule { }
