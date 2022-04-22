import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state.model';
import * as AddAllCards from '../actions/youTubeApi.actions';

export const videoCardsReducer = createReducer(
  initialState.videoCards,
  on(AddAllCards.addCards, (_, { videoCards }) => [...videoCards]),
);
