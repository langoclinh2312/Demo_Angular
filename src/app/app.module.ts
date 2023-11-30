import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './modules/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './modules/detail/detail.component';
import { SharedModule } from './shared/shared.module';
import { BaseModule } from './modules/base.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    BaseModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FormComponent,
    DetailComponent
  ]
})
export class AppModule { }
