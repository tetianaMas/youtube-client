import { CARD_DESC_SIZE, CARD_TITLE_SIZE } from '../constants';
import { CardAbstract } from './card-abstract';
import { CardType } from './card-type.model';
import { IStatistics, IVideoResponseItem } from './search-response.model';

const VIDEO_LINK_YOUTUBE = 'https://www.youtube.com/watch?v=';
export class Card implements CardAbstract {
  id: string;

  imgUrl: string;

  title: string;

  description: string;

  statistics: IStatistics;

  publishedAt: string;

  linkVideo: string;

  cardType = CardType.default;

  constructor(responseItem: IVideoResponseItem) {
    this.id = responseItem.id;
    this.imgUrl = responseItem.snippet?.thumbnails?.standard?.url || responseItem?.snippet?.thumbnails?.high?.url || '';
    this.title = responseItem.snippet.title.slice(0, CARD_TITLE_SIZE).trim();
    this.publishedAt = responseItem.snippet.publishedAt;
    this.description = responseItem.snippet.description.slice(0, CARD_DESC_SIZE).trim();
    this.statistics = responseItem.statistics;
    this.linkVideo = `${VIDEO_LINK_YOUTUBE}${this.id}`;
  }
}
