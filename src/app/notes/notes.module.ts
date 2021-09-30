import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from "@ngx-translate/core";
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    NotesComponent
  ],
    imports: [
        CommonModule,
        NotesRoutingModule,
        NgxPaginationModule,
        TranslateModule,
        ProgressSpinnerModule
    ]
})
export class NotesModule { }
