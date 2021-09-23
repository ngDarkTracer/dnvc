import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from 'primeng/api';
import {TableModule} from 'primeng/table';

const primeModule = [
  ButtonModule,
  SharedModule,
  TableModule
];

@NgModule({
  imports: [primeModule],
  exports: [primeModule]
})
export class PrimengModule { }
