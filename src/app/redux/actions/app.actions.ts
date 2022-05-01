import { createAction } from '@ngrx/store';
import { ActionType } from '../actionTypes.model';

export const removeCards = createAction(ActionType.removeCards);
