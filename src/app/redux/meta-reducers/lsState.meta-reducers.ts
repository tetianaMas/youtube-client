import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { CARDS_KEY } from '../../shared/constants';
import { StoreState } from '../state.model';

export function lsStateReducer(reducer: ActionReducer<StoreState>): ActionReducer<any, any> {
  return function (state: StoreState, action: Action) {
    const nextState = reducer(state, action);

    try {
      localStorage.setItem(CARDS_KEY, JSON.stringify([...nextState.customCards, ...nextState.videoCards]));
    } catch (err) {
      console.log(err);
    }

    return nextState;
  };
}

export const metaReducers: MetaReducer<StoreState>[] = [lsStateReducer];
