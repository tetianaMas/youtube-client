export type TSortType = {
  type: SortType;
  isDescendingOrder: boolean;
};

export enum SortType {
  date = 'date',
  viewCount = 'viewCount',
  default = 'default',
}
