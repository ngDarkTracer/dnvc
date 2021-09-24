import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {SigninComponent} from './auth/signin/signin.component';

const routes: Routes = [
  { path: 'signIn', component: SigninComponent },
  { path: '', redirectTo: '/signIn', pathMatch: 'full'},
  { path: 'main',
    component: NavigationComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'administration', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: 'alerts', loadChildren: () => import('./alerts/alerts.module').then(m => m.AlertsModule) },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'sector', loadChildren: () => import('./sector/sector.module').then(m => m.SectorModule) },
      { path: 'mailing', loadChildren: () => import('./mailing/mailing.module').then(m => m.MailingModule) },
      { path: 'mail-templates', loadChildren: () => import('./mail-templates/mail-templates.module').then(m => m.MailTemplatesModule) },
      { path: 'markets', loadChildren: () => import('./markets/markets.module').then(m => m.MarketsModule) },
      { path: 'structures', loadChildren: () => import('./structures/structures.module').then(m => m.StructuresModule) }
    ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
