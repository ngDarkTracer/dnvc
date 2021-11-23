import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TranslateModule} from '@ngx-translate/core';
import {SkeletonModule} from 'primeng/skeleton';
import {MarkdownModule} from 'ngx-markdown';


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        TranslateModule,
        SkeletonModule,
        MarkdownModule
    ]
})
export class HomeModule { }
