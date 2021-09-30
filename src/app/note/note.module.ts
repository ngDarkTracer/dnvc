import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    NoteComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    NgxPaginationModule,
    TranslateModule,
    ProgressSpinnerModule
  ]
})
export class NoteModule { }
