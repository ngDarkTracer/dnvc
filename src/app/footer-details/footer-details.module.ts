import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterDetailsRoutingModule } from './footer-details-routing.module';
import { FooterDetailsComponent } from './footer-details.component';
import {TranslateModule} from '@ngx-translate/core';
import {SkeletonModule} from 'primeng/skeleton';
import {MarkdownModule} from 'ngx-markdown';


@NgModule({
  declarations: [
    FooterDetailsComponent
  ],
    imports: [
        CommonModule,
        FooterDetailsRoutingModule,
        TranslateModule,
        SkeletonModule,
        MarkdownModule
    ]
})
export class FooterDetailsModule { }
