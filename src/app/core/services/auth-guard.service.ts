import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private router: Router, private auth: AuthService) {}

  canLoad(): boolean {
    return this.handleUserAuth();
  }

  canActivate(): boolean {
    return this.handleUserAuth();
  }

  handleUserAuth(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
