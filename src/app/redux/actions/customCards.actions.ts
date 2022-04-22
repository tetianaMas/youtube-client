import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'src/app/shared/models/custom-card.model';
import { FormValueCustomCard } from 'src/app/shared/models/fromValue.model';
import { ActionType } from '../actionTypes.model';

export const addCustomCard = createAction(ActionType.addCustomCard, props<{ card: CustomCard }>());
export const createCustomCard = createAction(ActionType.createCustomCard, props<{ formValue: FormValueCustomCard }>());
