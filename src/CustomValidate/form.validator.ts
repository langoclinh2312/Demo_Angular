import { AbstractControl } from '@angular/forms';

export function CustomValidatePhone(control: AbstractControl) {
  const value = control.value;
  const checkPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(value);
  return !checkPhone ? {checkPhone:true}: null;
}