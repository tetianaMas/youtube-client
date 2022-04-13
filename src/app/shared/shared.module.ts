import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './components/button/button.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormValidityErrorComponent } from './components/form-validity-error/form-validity-error.component';
import { FormToggleBtnComponent } from './components/form-toggle-btn/form-toggle-btn.component';
import { FormInputTextComponent } from './components/form-input-text/form-input-text.component';
import { FormInputPasswordComponent } from './components/form-input-password/form-input-password.component';
import { FormLinkComponent } from './components/form-link/form-link.component';
import { FormSubmitBlockComponent } from './components/form-submit-block/form-submit-block.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CustomFormComponent,
    FormButtonComponent,
    FormValidityErrorComponent,
    FormToggleBtnComponent,
    FormInputTextComponent,
    FormInputPasswordComponent,
    FormLinkComponent,
    FormSubmitBlockComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    ButtonComponent,
    CustomFormComponent,
    FormButtonComponent,
    FormValidityErrorComponent,
    FormInputTextComponent,
    FormInputPasswordComponent,
    FormLinkComponent,
    FormSubmitBlockComponent,
  ],
})
export class SharedModule {}
