import { CardType } from './card-type.model';
import { IStatistics } from './search-response.model';

export interface CardAbstract {
  title: string;
  description: string;
  imgUrl: string;
  linkVideo: string;
  publishedAt: string;
  id: string;
  cardType: CardType;
  statistics?: IStatistics;
}
