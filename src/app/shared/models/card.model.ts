import { ISearchResponseItem, IStatistics, IThumbnail } from './search-response.model';

export class Card {
  imgUrl: IThumbnail;

  title: string;

  description: string;

  statistics: IStatistics;

  publishedAt: string;

  constructor(responseItem: ISearchResponseItem) {
    this.imgUrl = responseItem.snippet.thumbnails;
    this.title = responseItem.snippet.title.slice(0, 45).trim();
    this.publishedAt = responseItem.snippet.publishedAt;
    this.description = responseItem.snippet.description;
    this.statistics = responseItem.statistics;
  }
}
