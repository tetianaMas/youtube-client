import { Card } from '../models/card.model';
import { ISearchResponseItem } from '../models/search-response.model';
import { response } from './response-mock';

export const cards = response.items.map((resItem: ISearchResponseItem) => new Card(resItem));
