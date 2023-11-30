import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function CustomValidatePhone(): ValidatorFn {
  const phoneRegex: RegExp = /^[0-9]{10}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = control.value && phoneRegex.test(control.value);
    return isValid ? null : { invalidPhone: true };
  };
}