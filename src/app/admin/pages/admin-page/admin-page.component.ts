import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomValidationService } from 'src/app/auth/services/custom-validation.service';
import { addCustomCard } from 'src/app/redux/actions/customCards.actions';
import { CustomCardsControls } from 'src/app/shared/constants';
import { CustomCard } from 'src/app/shared/models/custom-card.model';
import { ERRORS_MESSAGES } from './error-messages';

const FORM_TITLE = 'Create new card';
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

  fieldTextType: boolean = false;

  errors = ERRORS_MESSAGES;

  formTitle = FORM_TITLE;

  readonly controlNameTitle = CustomCardsControls.title;

  readonly controlNameDesc = CustomCardsControls.description;

  readonly controlNameImg = CustomCardsControls.img;

  readonly controlNameLinkVideo = CustomCardsControls.linkVideo;

  readonly controlNameDateCreation = CustomCardsControls.dateCreation;

  constructor(
    private validService: CustomValidationService,
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
  ) {
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

  onSubmit(): void {
    this.store.dispatch(addCustomCard({ card: new CustomCard(this.form.value) }));
    this.form.reset();
    this.router.navigate(['main']);
  }

  get title() {
    return <FormControl>this.form.get(this.controlNameTitle);
  }

  get description() {
    return <FormControl>this.form.get(this.controlNameDesc);
  }

  get img() {
    return <FormControl>this.form.get(this.controlNameImg);
  }

  get linkVideo() {
    return <FormControl>this.form.get(this.controlNameLinkVideo);
  }

  get dateCreation() {
    return <FormControl>this.form.get(this.controlNameDateCreation);
  }
}
