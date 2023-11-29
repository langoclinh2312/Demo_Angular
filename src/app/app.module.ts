import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './modules/form-modules/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './modules/detail-modules/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FormComponent,
    DetailComponent
  ]
})
export class AppModule { }
