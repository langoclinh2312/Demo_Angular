import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PhoneFormatPipe'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length === 10) {
      return phoneNumber.slice(0, 4) + ' ' + phoneNumber.slice(4, 7) + ' ' + phoneNumber.slice(7, 10);
    } else {
      return value;
    }
  }

}
