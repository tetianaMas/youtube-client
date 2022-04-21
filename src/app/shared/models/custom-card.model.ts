import { CardAbstract } from './card-abstract';
import { IStatistics } from './search-response.model';

export class CustomCard implements CardAbstract {
  title: string;

  description: string;

  imgUrl: string;

  linkVideo: string;

  publishedAt: string;

  id: string;

  statistics: IStatistics | null = null;

  constructor(cardValue: any) {
    this.title = cardValue.title || '';
    this.description = cardValue.description || '';
    this.imgUrl = cardValue.img || '';
    this.linkVideo = cardValue.linkVideo || '';
    this.publishedAt = cardValue.dateCreation || '';
    this.id = (Math.random() * 10).toString(36).substring(2);
  }
}
