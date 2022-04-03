import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { LoginPageComponent } from './pages/login/login-page.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, AuthRoutingModule, HttpClientModule, ReactiveFormsModule, SharedModule],
  providers: [AuthService],
})
export class AuthModule {}
