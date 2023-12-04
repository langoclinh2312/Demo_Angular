import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../shared/services/data.service';
import { ICategory } from '../shared/interface/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({});
  submited: boolean = true;
  @Output() childEvent = new EventEmitter<ICategory[]>();
  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]]
    })
  }

  getAllDatable() {
    this.dataService.getAll().subscribe((e) => {
      this.childEvent.emit(e.data);
    });
  }

  submitForm() {
    this.submited = true;
    if (this.categoryForm.invalid) {
      return;
    }
    this.dataService.create(this.categoryForm.getRawValue()).subscribe((e) => {
      this.getAllDatable();
    });
  }
}
