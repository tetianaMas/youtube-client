import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './components/button/button.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { CustomFormFieldComponent } from './components/custom-form-field/custom-form-field.component';
import { CustomFormButtonsComponent } from './components/custom-form-buttons/custom-form-buttons.component';
import { FormValidityErrorComponent } from './components/form-validity-error/form-validity-error.component';
import { FormToggleBtnComponent } from './components/form-toggle-btn/form-toggle-btn.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CustomFormComponent,
    CustomFormFieldComponent,
    CustomFormButtonsComponent,
    FormValidityErrorComponent,
    FormToggleBtnComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    ButtonComponent,
    CustomFormComponent,
    CustomFormFieldComponent,
    CustomFormButtonsComponent,
    FormValidityErrorComponent,
  ],
})
export class SharedModule {}
