import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'industries', loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule) },
  { path: 'sectors', loadChildren: () => import('./sectors/sectors.module').then(m => m.SectorsModule) },
  { path: 'markets', loadChildren: () => import('./markets/markets.module').then(m => m.MarketsModule) },
  { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'industries/:industry', loadChildren: () => import('./industry/industry.module').then(m => m.IndustryModule) },
  { path: 'markets/:zone', loadChildren: () => import('./market/market.module').then(m => m.MarketModule) },
  { path: 'notes/:note', loadChildren: () => import('./note/note.module').then(m => m.NoteModule) },
  { path: 'home/:detail', loadChildren: () => import('./footer-details/footer-details.module').then(m => m.FooterDetailsModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'subscribe', loadChildren: () => import('./subscribe/subscribe.module').then(m => m.SubscribeModule) },
  { path: 'activation/:code', loadChildren: () => import('./activation/activation.module').then(m => m.ActivationModule) },
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  { path: '**', loadChildren: () => import('./four-zero-four/four-zero-four.module').then(m => m.FourZeroFourModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
