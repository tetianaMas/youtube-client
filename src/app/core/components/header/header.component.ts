import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'ytube-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subs: Subscription = Subscription.EMPTY;

  userName: string = '';

  isUserLoggedIn: boolean = false;

  constructor(private router: Router, private authSrvice: AuthService) {}

  ngOnInit(): void {
    this.subs = this.authSrvice.state$.subscribe((state) => {
      this.isUserLoggedIn = !!state.token;
      this.userName = state.name;
    });
  }

  onLogoutClick(): void {
    this.authSrvice.logout();
  }

  onProfileClick() {
    this.router.navigate(['admin']);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
