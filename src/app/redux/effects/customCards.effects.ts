import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { map } from 'rxjs/operators';
import { CustomCard } from 'src/app/shared/models/custom-card.model';
import { FormValueCustomCard } from 'src/app/shared/models/fromValue.model';
import { ActionType } from '../actionTypes.model';

type CreateCustomActionType = {
  formValue: FormValueCustomCard;
} & TypedAction<ActionType.createCustomCard>;

@Injectable()
export class CustomCardsEffects {
  constructor(private actions$: Actions) {}

  searchCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType<CreateCustomActionType>(ActionType.createCustomCard),
      map((action) => ({ type: ActionType.addCustomCard, card: new CustomCard(action.formValue) })),
    ),
  );
}
