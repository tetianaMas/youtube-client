import { CARD_DESC_SIZE, CARD_TITLE_SIZE } from '../constants';
import { CardAbstract } from './card-abstract';
import { IStatistics, IVideoResponseItem } from './search-response.model';

export class Card implements CardAbstract {
  id: string;

  imgUrl: string;

  title: string;

  description: string;

  statistics: IStatistics | null;

  publishedAt: string;

  linkVideo: string = '';

  constructor(responseItem: IVideoResponseItem) {
    this.id = responseItem.id;
    this.imgUrl = responseItem.snippet?.thumbnails?.standard?.url || responseItem?.snippet?.thumbnails?.high?.url || '';
    this.title = responseItem.snippet.title.slice(0, CARD_TITLE_SIZE).trim();
    this.publishedAt = responseItem.snippet.publishedAt;
    this.description = responseItem.snippet.description.slice(0, CARD_DESC_SIZE).trim();
    this.statistics = responseItem.statistics;
  }
}
