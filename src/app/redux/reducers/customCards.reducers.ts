import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state.model';
import * as CustomCardActions from '../actions/customCards.actions';

export const customCardsReducer = createReducer(
  initialState.customCards,
  on(CustomCardActions.addCustomCard, (state, { card }) => {
    return [...state, card];
  }),
);
