import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state.model';
import * as videoCardsActions from '../actions/youTubeApi.actions';
import * as appActions from '../actions/app.actions';

export const videoCardsReducer = createReducer(
  initialState.videoCards,
  on(videoCardsActions.addCards, (_, { videoCards }) => [...videoCards]),
  on(appActions.removeCards, () => []),
);
