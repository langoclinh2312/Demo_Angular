import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneFormatPipe } from '../shared/pipe/PhoneFormatPipe.pipe';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormComponent,
    DetailComponent,
    PhoneFormatPipe
  ],
  exports: [
    FormComponent,
    DetailComponent,
    PhoneFormatPipe
  ],
})
export class BaseModule { }
