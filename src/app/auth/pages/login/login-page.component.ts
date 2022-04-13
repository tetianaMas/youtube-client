import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CustomValidationService } from '../../services/custom-validation.service';

const ERRORS_MESSAGES = {
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
@Component({
  selector: 'ytube-client-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form: FormGroup;

  subs = Subscription.EMPTY;

  fieldTextType: boolean = false;

  errors = ERRORS_MESSAGES;

  isToggleBtnShow = true;

  constructor(private authService: AuthService, private router: Router, private validService: CustomValidationService) {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.compose([Validators.required, this.validService.passwordValidator()])),
    });
  }

  ngOnInit(): void {
    this.subs = this.authService.state$.subscribe((state) => !!state.token && this.router.navigate(['main']));
  }

  get login() {
    return this.form.get('login');
  }

  get password() {
    return this.form.get('password');
  }

  onTogglePasswordVisibility(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  onLogin(): void {
    const value = this.form.value;
    if (this.form.valid) this.authService.login(value.login, value.password);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
