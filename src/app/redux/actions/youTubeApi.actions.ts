import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/shared/models/card.model';
import { CardActionType } from '../actionTypes.model';

export const addCards = createAction(CardActionType.addVideoCards, props<{ videoCards: Card[] }>());

export const searchCards = createAction(CardActionType.searchVideoCards, props<{ search: string }>());
