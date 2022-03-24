import { Card } from 'src/app/models/card.model';
import { ISearchResponseItem } from 'src/app/models/search-response.model';
import { response } from './response-mock';

export const cards = response.items.map((resItem: ISearchResponseItem) => new Card(resItem));
