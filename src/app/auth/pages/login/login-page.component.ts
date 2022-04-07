import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ytube-client-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login(): void {
    const value = this.form.value;
    this.authService.login(value.email, value.password);
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('');
    }
  }
}
