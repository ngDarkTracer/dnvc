import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'industries', loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule) },
  { path: 'sectors', loadChildren: () => import('./sectors/sectors.module').then(m => m.SectorsModule) },
  { path: 'markets', loadChildren: () => import('./markets/markets.module').then(m => m.MarketsModule) },
  { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
  { path: 'resources', loadChildren: () => import('./ressources/ressources.module').then(m => m.RessourcesModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'industries/:industry', loadChildren: () => import('./industry/industry.module').then(m => m.IndustryModule) },
  { path: 'markets/:market', loadChildren: () => import('./market/market.module').then(m => m.MarketModule) },
  { path: '**', loadChildren: () => import('./four-zero-four/four-zero-four.module').then(m => m.FourZeroFourModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
