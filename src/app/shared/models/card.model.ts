import { CARD_DESC_SIZE, CARD_TITLE_SIZE } from '../constants';
import { IStatistics, IThumbnail, IVideoResponseItem } from './search-response.model';

export class Card {
  id: string;

  imgUrl: IThumbnail;

  title: string;

  description: string;

  statistics: IStatistics;

  publishedAt: string;

  constructor(responseItem: IVideoResponseItem) {
    this.id = responseItem.id;
    this.imgUrl = responseItem.snippet.thumbnails;
    this.title = responseItem.snippet.title.slice(0, CARD_TITLE_SIZE).trim();
    this.publishedAt = responseItem.snippet.publishedAt;
    this.description = responseItem.snippet.description.slice(0, CARD_DESC_SIZE).trim();
    this.statistics = responseItem.statistics;
  }
}
