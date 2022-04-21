import { Card } from '../shared/models/card.model';

export interface StoreState {
  videoCards: Card[];
  customCards: Card[];
}

export const initialState: StoreState = {
  videoCards: [],
  customCards: [],
};
