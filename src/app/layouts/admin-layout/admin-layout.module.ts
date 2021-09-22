import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import {SidebarModule} from '../../sidebar/sidebar.module';
import {NavbarModule} from '../../navbar/navbar.module';


@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    SidebarModule,
    NavbarModule
  ]
})
export class AdminLayoutModule { }
