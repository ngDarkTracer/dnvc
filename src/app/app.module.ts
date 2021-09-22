import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SidebarModule} from './sidebar/sidebar.module';
import {NavbarModule} from './navbar/navbar.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
