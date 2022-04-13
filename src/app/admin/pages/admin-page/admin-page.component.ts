import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomValidationService } from 'src/app/auth/services/custom-validation.service';
import { TValidationError } from 'src/app/shared/models/error-type';

const FORM_TITLE = 'Create new card';
const ERRORS_MESSAGES: TValidationError = {
  title: [
    {
      type: 'required',
      message: 'Please enter a title.',
    },
    {
      type: 'minlength',
      message: 'The title is too short.',
    },
    {
      type: 'maxlength',
      message: 'The title is too long.',
    },
  ],
  description: [
    {
      type: 'maxlength',
      message: 'The description is too long.',
    },
  ],
  img: [
    {
      type: 'required',
      message: 'Please enter a link to the image.',
    },
    { type: 'invalidUrl', message: 'The image link is invalid.' },
  ],
  linkVideo: [
    {
      type: 'required',
      message: 'Please enter a link to the video.',
    },
    { type: 'invalidUrl', message: 'The video link is invalid.' },
  ],
  dateCreation: [
    { type: 'required', message: 'Please enter a creation date' },
    {
      type: 'invalidDate',
      message: 'The date is invalid. The date cannot be in the past.',
    },
  ],
};

const MIN_TITLE_LENGTH = 3;
const MAX_TITLE_LENGTH = 20;
const MAX_DESC_LENGTH = 255;

@Component({
  selector: 'ytube-client-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  form: FormGroup;

  subs = Subscription.EMPTY;

  fieldTextType: boolean = false;

  errors = ERRORS_MESSAGES;

  formTitle = FORM_TITLE;

  constructor(private validService: CustomValidationService, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [
        '',
        [Validators.required, Validators.minLength(MIN_TITLE_LENGTH), Validators.maxLength(MAX_TITLE_LENGTH)],
      ],
      description: ['', [Validators.maxLength(MAX_DESC_LENGTH)]],
      img: ['', [Validators.required, this.validService.validateUrl()]],
      linkVideo: ['', [Validators.required, this.validService.validateUrl()]],
      dateCreation: ['', [Validators.required, this.validService.validateDate()]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  get title() {
    return <FormControl>this.form.get('title');
  }

  get description() {
    return <FormControl>this.form.get('description');
  }

  get img() {
    return <FormControl>this.form.get('img');
  }

  get linkVideo() {
    return <FormControl>this.form.get('linkVideo');
  }

  get dateCreation() {
    return <FormControl>this.form.get('dateCreation');
  }
}
