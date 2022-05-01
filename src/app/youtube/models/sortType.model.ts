export type TSortType = {
  type: SortType;
  isAscendingOrder: boolean;
};

export enum SortType {
  date = 'date',
  viewCount = 'viewCount',
  default = 'default',
}
