import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/shared/models/card.model';
import { YoutubeCardActionType } from '../actionTypes.model';

export const addCards = createAction(YoutubeCardActionType.addCards, props<{ videoCards: Card[] }>());

export const searchCards = createAction(YoutubeCardActionType.searchCards, props<{ search: string }>());

export const removeCards = createAction(YoutubeCardActionType.removeCards);
