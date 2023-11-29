import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatePhone } from '../../../../CustomValidate/form.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public profileForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, CustomValidatePhone]],
    birtDay: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  submitForm() {
    console.log(this.profileForm);
  }
}
