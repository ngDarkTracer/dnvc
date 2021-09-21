import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {AlertsComponent} from '../../alerts/alerts.component';
import {StructuresComponent} from '../../structures/structures.component';
import {IndustriesComponent} from '../../industries/industries.component';
import {MarketsComponent} from '../../markets/markets.component';
import {MailingComponent} from '../../mailing/mailing.component';
import {MailTemplatesComponent} from '../../mail-templates/mail-templates.component';
import {AdminComponent} from '../../admin/admin.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
  ],
  declarations: [
      DashboardComponent,
      AlertsComponent,
      StructuresComponent,
      IndustriesComponent,
      MarketsComponent,
      MailingComponent,
      MailTemplatesComponent,
      AdminComponent
  ]
})

export class AdminLayoutModule {}
