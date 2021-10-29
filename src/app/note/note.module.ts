import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule} from '@ngx-translate/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DataViewModule} from 'primeng/dataview';
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {SkeletonModule} from 'primeng/skeleton';


@NgModule({
  declarations: [
    NoteComponent
  ],
    imports: [
        CommonModule,
        NoteRoutingModule,
        NgxPaginationModule,
        TranslateModule,
        ProgressSpinnerModule,
        DataViewModule,
        AccordionModule,
        DropdownModule,
        CalendarModule,
        SkeletonModule
    ]
})
export class NoteModule { }
