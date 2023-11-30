import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatePhone } from '../../../CustomValidate/form.validator';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submited: boolean = false;
  listData: any[] = [];

  constructor(private fb: FormBuilder, private formDataService: DataService) {}

  ngOnInit() {
  }

  dataForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, CustomValidatePhone()]],
    birthDay: ['', Validators.required]
  });

  submitForm() {
    this.submited = true;
    if (this.dataForm.status == 'VALID') {
      this.listData.push(this.dataForm)
      this.formDataService.sendObject(this.listData);
    }
  }
}
