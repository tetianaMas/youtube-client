import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { TValidationError } from 'src/app/shared/models/error-type';
import { AuthService } from '../../services/auth.service';
import { CustomValidationService } from '../../services/custom-validation.service';

const FORM_TITLE = 'Login';
const ERRORS_MESSAGES: TValidationError = {
  login: [
    {
      type: 'required',
      message: 'Please enter a login email.',
    },
    {
      type: 'email',
      message: 'The login email is invalid.',
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
};

const CONTROL_LOGIN = 'login';
const CONTROL_PASSWORD = 'password';

@Component({
  selector: 'ytube-client-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  fieldTextType: boolean = false;

  errors = ERRORS_MESSAGES;

  isToggleBtnShow = true;

  formTitle = FORM_TITLE;

  readonly controlNameLogin = CONTROL_LOGIN;

  readonly controlNamePassword = CONTROL_PASSWORD;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private validService: CustomValidationService,
  ) {
    this.form = this.fb.group({
      login: ['', [Validators.email, Validators.required]],
      password: ['', Validators.compose([Validators.required, this.validService.validatePassword()])],
    });
  }

  ngOnInit(): void {
    this.authService.state$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((state) => !!state.token && this.router.navigate(['main']));
  }

  get login() {
    return <FormControl>this.form.controls[this.controlNameLogin];
  }

  get password() {
    return <FormControl>this.form.get(this.controlNamePassword);
  }

  onTogglePasswordVisibility(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  onSubmit(): void {
    const value = this.form.value;
    if (this.form.valid) this.authService.login(value.login, value.password);
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
