import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'src/app/shared/models/custom-card.model';
import { FormValueCustomCard } from 'src/app/shared/models/fromValue.model';
import { CustomCardActionType } from '../actionTypes.model';

export const addCustomCard = createAction(CustomCardActionType.addCard, props<{ card: CustomCard }>());
export const createCustomCard = createAction(
  CustomCardActionType.createCard,
  props<{ formValue: FormValueCustomCard }>(),
);
export const removeCustomCards = createAction(CustomCardActionType.removeCards);
