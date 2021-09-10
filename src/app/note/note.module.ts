import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    NoteComponent
  ],
    imports: [
        CommonModule,
        NoteRoutingModule,
        NgxPaginationModule
    ]
})
export class NoteModule { }
