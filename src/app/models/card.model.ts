import { IStatistics } from './search-response.model';

export interface Card {
  imgUrl: string;
  title: string;
  description: string;
  statistics: IStatistics;
}
