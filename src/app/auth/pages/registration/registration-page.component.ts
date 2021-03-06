import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ReplaySubject, Subscription, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CustomValidationService } from 'src/app/auth/services/custom-validation.service';
import { TValidationError } from 'src/app/shared/models/error-type';

const FORM_TITLE = 'Registration';
const ERRORS_MESSAGES: TValidationError = {
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
    {
      type: 'passwordMismatch',
      message: 'Passwords do not match!',
    },
  ],
};

const MIN_LENGTH_FIRST_NAME = 2;
const MIN_LENGTH_LAST_NAME = 2;
const CONTROL_FIRST_NAME = 'firstName';
const CONTROL_LAST_NAME = 'lastName';
const CONTROL_EMAIL = 'email';
const CONTROL_PASSWORD = 'password';
const CONTROL_PASSWORD_CONFIRM = 'confirmPassword';

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

  readonly controlNameFirstName = CONTROL_FIRST_NAME;

  readonly controlNameLastName = CONTROL_LAST_NAME;

  readonly controlNameEmail = CONTROL_EMAIL;

  readonly controlNamePassword = CONTROL_PASSWORD;

  readonly controlNamePasswordConfirm = CONTROL_PASSWORD_CONFIRM;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private authService: AuthService,
    private router: Router,
    private validationService: CustomValidationService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(MIN_LENGTH_FIRST_NAME)]],
      lastName: ['', [Validators.required, Validators.minLength(MIN_LENGTH_LAST_NAME)]],
      email: ['', [Validators.email, Validators.required]],
      passwords: this.fb.group(
        {
          password: ['', Validators.compose([Validators.required, this.validationService.validatePassword()])],
          confirmPassword: ['', [Validators.required]],
        },
        {
          validators: this.validationService.confirmPassword(),
        },
      ),
    });
  }

  ngOnInit(): void {
    this.authService.state$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((state) => !!state.token && this.router.navigate(['main']));
  }

  get lastName() {
    return <FormControl>this.form.get(this.controlNameLastName);
  }

  get firstName() {
    return <FormControl>this.form.get(this.controlNameFirstName);
  }

  get email() {
    return <FormControl>this.form.get(this.controlNameEmail);
  }

  get password() {
    return <FormControl>this.form.get(['passwords', this.controlNamePassword]);
  }

  get confirmPassword() {
    return <FormControl>this.form.get(['passwords', this.controlNamePasswordConfirm]);
  }

  onTogglePasswordVisibility(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  onSubmit(): void {
    const value = this.form.value;
    if (this.form.valid) this.authService.login(value.email, value.password);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
