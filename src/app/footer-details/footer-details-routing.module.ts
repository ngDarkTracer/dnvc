import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterDetailsComponent } from './footer-details.component';

const routes: Routes = [{ path: '', component: FooterDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterDetailsRoutingModule { }
