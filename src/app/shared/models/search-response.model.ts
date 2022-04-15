interface IThumbnailItem {
  url: string;
  width: number;
  height: number;
}

export interface IThumbnail {
  default: IThumbnailItem;
  medium: IThumbnailItem;
  high: IThumbnailItem;
  standard: IThumbnailItem;
  maxres: IThumbnailItem;
}

interface ILocalized {
  title: string;
  description: string;
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnail;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
  defaultLanguage?: string;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface IVideoKind {
  videoId: string;
  kind: string;
}

export interface ISearchResponseItem {
  kind: string;
  etag: string;
  id: IVideoKind;
}

export interface IVideoResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface ISearchResponse<T> {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: T[];
}

export interface SearchResponce extends ISearchResponse<ISearchResponseItem> {}

export interface VideoResponce extends ISearchResponse<IVideoResponseItem> {}
