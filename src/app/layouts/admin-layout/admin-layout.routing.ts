import { Routes } from '@angular/router';
import {AlertsComponent} from '../../alerts/alerts.component';
import {IndustriesComponent} from '../../industries/industries.component';
import {MailingComponent} from '../../mailing/mailing.component';
import {MailTemplatesComponent} from '../../mail-templates/mail-templates.component';
import {AdminComponent} from '../../admin/admin.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {StructuresComponent} from '../../structures/structures.component';
import {MarketsComponent} from '../../markets/markets.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'Dashboard', component: DashboardComponent},
    {path: 'Alertes', component: AlertsComponent},
    {path: 'Structures', component: StructuresComponent},
    {path: 'Filières', component: IndustriesComponent},
    {path: 'Marchés', component: MarketsComponent},
    {path: 'mailing', component: MailingComponent},
    {path: 'Mailing Template', component: MailTemplatesComponent},
    {path: 'Administration', component: AdminComponent}
];
