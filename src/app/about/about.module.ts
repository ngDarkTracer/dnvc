import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {TranslateModule} from "@ngx-translate/core";
import {SkeletonModule} from 'primeng/skeleton';
import {MarkdownModule} from 'ngx-markdown';


@NgModule({
  declarations: [
    AboutComponent
  ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        TranslateModule,
        SkeletonModule,
        MarkdownModule
    ]
})
export class AboutModule { }
