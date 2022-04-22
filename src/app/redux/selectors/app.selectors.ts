import { createSelector } from '@ngrx/store';
import { CardAbstract } from 'src/app/shared/models/card-abstract';
import { StoreState } from '../state.model';

const stateSelector = (state: StoreState) => state;
export const selectAllCards = createSelector(
  stateSelector,
  (st) => <CardAbstract[]>[...st.customCards, ...st.videoCards],
);
