import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/shared/models/card.model';
import { ActionType } from '../actionTypes.model';

export const addCards = createAction(ActionType.addVideoCards, props<{ videoCards: Card[] }>());

export const searchCards = createAction(ActionType.searchVideoCards, props<{ search: string }>());
