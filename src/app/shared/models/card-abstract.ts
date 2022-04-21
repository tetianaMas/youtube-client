import { IStatistics } from './search-response.model';

export interface CardAbstract {
  title: string;

  description: string;

  imgUrl: string;

  linkVideo: string;

  publishedAt: string;

  id: string;

  statistics: IStatistics | null;
}
