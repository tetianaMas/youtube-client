import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  validatePassword(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }
      const regexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*[!@#$%^&?\]\[]).{8,}$/;
      const match = control.value.match(regexp);
      return match ? null : { invalidPassword: true };
    };
  }

  validateUrl(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        return null;
      }
      const regexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@%!\$&'\(\)\*\+,;=.]+$/;
      const match = control.value.match(regexp);
      return match ? null : { invalidUrl: true };
    };
  }

  confirmPassword(): ValidatorFn {
    return (control: AbstractControl) => {
      const passwordControl = control.get('password');
      const confirmPasswordControl = control.get('confirmPassword');

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        const errorValue = { passwordMismatch: true };
        confirmPasswordControl.setErrors(errorValue);

        return errorValue;
      }

      return null;
    };
  }
}
