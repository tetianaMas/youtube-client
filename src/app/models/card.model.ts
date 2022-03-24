import { ISearchResponseItem, IStatistics, IThumbnail } from './search-response.model';

export interface ICard {
  imgUrl: IThumbnail;
  title: string;
  description: string;
  statistics: IStatistics;
}

export class Card implements ICard {
  imgUrl: IThumbnail;

  title: string;

  description: string;

  statistics: IStatistics;

  constructor(responseItem: ISearchResponseItem) {
    this.imgUrl = responseItem.snippet.thumbnails;
    this.title = responseItem.snippet.title;
    this.description = responseItem.snippet.description;
    this.statistics = responseItem.statistics;
  }
}
