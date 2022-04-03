import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

const TOKEN_NAME = 'user-token';

@Injectable({
  providedIn: 'any',
})
export class AuthService {
  constructor(private storage: LocalstorageService, public router: Router) {}

  public isAuthenticated(): boolean {
    return !!this.storage.getItem<string>(TOKEN_NAME);
  }

  public login(email: string = '', password: string = ''): void {
    const token = (Math.random() * (email.length + password.length || 1) * 10).toString(16);

    this.storage.setItem<string>(TOKEN_NAME, token);
    this.router.navigateByUrl('');
  }

  public logout(): void {
    this.storage.removeItem(TOKEN_NAME);
    this.router.navigateByUrl('login');
  }
}
