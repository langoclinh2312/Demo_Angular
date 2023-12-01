import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataService } from './shared/services/data.service';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CategoryComponent,
    CategoryFormComponent,
    CategoryTableComponent
  ],
  providers: [DataService],
  bootstrap: [
    CategoryComponent,
    CategoryFormComponent
  ]
})
export class CategoryModule { }
