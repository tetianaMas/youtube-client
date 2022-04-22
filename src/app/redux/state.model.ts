import { Card } from '../shared/models/card.model';
import { CustomCard } from '../shared/models/custom-card.model';

export interface StoreState {
  videoCards: Card[];
  customCards: CustomCard[];
}

export const initialState: StoreState = {
  videoCards: [],
  customCards: [],
};
