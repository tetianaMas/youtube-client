import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';

const LOGOUT_BTN_TEXT = 'Logout';
const ICON_PROFILE_PATH = './assets/icons/profile-button-icon.svg';

@Component({
  selector: 'ytube-client-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
})
export class ProfilePanelComponent implements OnInit, OnDestroy {
  readonly logutBtnText = LOGOUT_BTN_TEXT;

  private subs: Subscription | null = null;

  userName: string = '';

  isUserLoggedIn: boolean = false;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private router: Router,
    private authSrvice: AuthService,
  ) {
    iconRegistry.addSvgIcon('profile-btn', sanitizer.bypassSecurityTrustResourceUrl(ICON_PROFILE_PATH));
  }

  ngOnInit(): void {
    this.subs = this.authSrvice.state$.subscribe((state) => {
      this.isUserLoggedIn = !!state.token;
      this.userName = state.name;
    });
  }

  onLogoutClick(): void {
    this.authSrvice.logout();
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }
}
