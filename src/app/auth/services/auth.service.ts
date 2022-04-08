import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

const USER_STATE_KEY = 'user-state';
const NAME_DEFAULT = 'Your name';

type TUserState = {
  token: string;
  name: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private stateValue: TUserState = {
    token: '',
    name: NAME_DEFAULT,
  };

  state$: Subject<TUserState>;

  constructor(private storage: LocalstorageService, private router: Router) {
    this.state$ = new BehaviorSubject<TUserState>(this.state);
  }

  login(name: string = '', password: string = ''): void {
    const token = this.getGeneratedToken(name + password);
    this.state = {
      token,
      name,
    };
    this.state$.next(this.state);
  }

  logout(): void {
    this.storage.removeItem(USER_STATE_KEY);
    this.state$.next(this.state);
    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    return !!this.state.token;
  }

  private getGeneratedToken(randomStr: string): string {
    return (Math.random() + (randomStr.length || 1)).toString(36).substring(2);
  }

  private get state(): TUserState {
    return this.storage.getItem<TUserState>(USER_STATE_KEY) || this.stateValue;
  }

  private set state(stateCur: TUserState) {
    this.storage.setItem<TUserState>(USER_STATE_KEY, stateCur);
  }
}
