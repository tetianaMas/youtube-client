import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { LoginPageComponent } from './pages/login/login-page.component';
import { RegistrationPageComponent } from './pages/registration/registration-page.component';

@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent],
  imports: [CommonModule, AuthRoutingModule, HttpClientModule, ReactiveFormsModule, SharedModule, MaterialModule],
})
export class AuthModule {}
