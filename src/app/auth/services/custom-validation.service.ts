import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }
      const regexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*[!@#$%^&?\]\[]).{8,}$/;
      const match = control.value.match(regexp);
      return match ? null : { invalidPassword: true };
    };
  }

  checkUrlValidity(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }
      const regexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@%!\$&'\(\)\*\+,;=.]+$/;
      const match = control.value.match(regexp);
      return match ? null : { invalidUrl: true };
    };
  }

  checkDateValidity(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }
      const now = new Date();
      const userDate = new Date(control.value);
      return userDate.getTime() - now.getTime() > 0 ? null : { invalidDate: true };
    };
  }
}
