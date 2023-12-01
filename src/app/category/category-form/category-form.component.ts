import { Component, Input, OnInit } from '@angular/core';
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
  @Input() updateCatgories: ICategory[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
    })
  }

  submitForm() {
    this.submited = true;
    if (this.categoryForm.invalid) {
      return;
    }
    this.dataService.create(this.categoryForm.getRawValue()).subscribe((e) => {});
  }

  isEnableChecked(): boolean {
    if (this.updateCatgories.length && this.updateCatgories[0].status === 1) {
      return true;
    }
    return false;
  }
}
