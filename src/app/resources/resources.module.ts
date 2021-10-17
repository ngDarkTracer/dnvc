import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    ResourcesComponent
  ],
    imports: [
        CommonModule,
        ResourcesRoutingModule,
        TranslateModule
    ]
})
export class ResourcesModule { }
