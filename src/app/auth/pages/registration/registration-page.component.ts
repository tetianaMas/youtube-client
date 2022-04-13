import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CustomValidationService } from 'src/app/auth/services/custom-validation.service';

const FORM_TITLE = 'Registration';
const ERRORS_MESSAGES = {
  firstName: [
    { type: 'required', message: 'Please enter a first name.' },
    { type: 'minlength', message: 'The min length is 2 symbols.' },
  ],
  lastName: [
    { type: 'required', message: 'Please enter a last name.' },
    { type: 'minlength', message: 'The min length is 2 symbols.' },
  ],
  email: [
    {
      type: 'required',
      message: 'Please enter an email.',
    },
    {
      type: 'email',
      message: 'The email is invalid.',
    },
  ],
  password: [
    {
      type: 'required',
      message: 'Please enter a password.',
    },
    {
      type: 'invalidPassword',
      message: `Your password isn't strong enough. It must have:
            at least 8 characters, uppercase and lowercase letters,
            at least 1 digit,
            and 1 special character (!@#$%^&?[])`,
    },
  ],
  confirmPassword: [
    {
      type: 'required',
      message: 'Please confirm a password.',
    },
  ],
};

@Component({
  selector: 'ytube-client-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit, OnDestroy {
  form: FormGroup;

  subs = Subscription.EMPTY;

  fieldTextType: boolean = false;

  formTitle = FORM_TITLE;

  errors = ERRORS_MESSAGES;

  isToggleBtnShow = true;

  constructor(private authService: AuthService, private router: Router, private validService: CustomValidationService) {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.compose([Validators.required, this.validService.passwordValidator()])),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.subs = this.authService.state$.subscribe((state) => !!state.token && this.router.navigate(['main']));
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onTogglePasswordVisibility(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  onSubmit(): void {
    const value = this.form.value;
    console.log(value);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
