import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { map } from 'rxjs/operators';
import { CustomCard } from 'src/app/shared/models/custom-card.model';
import { FormValueCustomCard } from 'src/app/shared/models/fromValue.model';
import { CustomCardActionType } from '../actionTypes.model';

type CreateCustomActionType = {
  formValue: FormValueCustomCard;
} & TypedAction<CustomCardActionType.createCard>;

@Injectable()
export class CustomCardsEffects {
  constructor(private actions$: Actions) {}

  searchCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType<CreateCustomActionType>(CustomCardActionType.createCard),
      map((action) => ({ type: CustomCardActionType.addCard, card: new CustomCard(action.formValue) })),
    ),
  );
}
