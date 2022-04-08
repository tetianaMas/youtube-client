import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ytube-client-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form: FormGroup;

  subs = Subscription.EMPTY;

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      login: new FormControl('', Validators.minLength(2)),
      password: new FormControl('', Validators.minLength(8)),
    });
  }

  ngOnInit(): void {
    this.subs = this.authService.state$.subscribe((state) => !!state.token && this.router.navigate(['main']));
  }

  onLogin(): void {
    const value = this.form.value;
    if (value.login && value.password && this.form.valid) this.authService.login(value.login, value.password);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
