import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {RippleModule} from 'primeng/ripple';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';

const primeModule = [
  ButtonModule,
  SharedModule,
  TableModule,
  ToolbarModule,
  RippleModule,
  FileUploadModule,
  InputTextModule,
  ToastModule
];

@NgModule({
  imports: [primeModule],
  exports: [primeModule]
})
export class PrimengModule { }
