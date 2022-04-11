import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private router: Router, private auth: AuthService) {}

  canLoad(): boolean {
    return this.handleUserAuth();
  }

  canActivate(): boolean {
    return this.handleUserAuth();
  }

  handleUserAuth(): boolean {
    const isAuthenticated = this.auth.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['login']);
    }

    return isAuthenticated;
  }
}
