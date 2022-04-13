import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomValidationService } from 'src/app/auth/services/custom-validation.service';

const ERRORS_MESSAGES = {
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
      message: 'The date is invalid.',
    },
  ],
};

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

  constructor(private validService: CustomValidationService) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      img: new FormControl('', [Validators.required, this.validService.checkUrlValidity()]),
      linkVideo: new FormControl('', [Validators.required, this.validService.checkUrlValidity()]),
      dateCreation: new FormControl('', [Validators.required, this.validService.checkDateValidity()]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get img() {
    return this.form.get('img');
  }

  get linkVideo() {
    return this.form.get('linkVideo');
  }

  get dateCreation() {
    return this.form.get('dateCreation');
  }
}
