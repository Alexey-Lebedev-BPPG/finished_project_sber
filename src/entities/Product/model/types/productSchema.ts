export type ISort = 'high-price' | 'low-price' | 'newest' | 'oldest';

export interface ProductSchema {
  sort: ISort;
  page: number;
  perPage: number;
  searchText: string;
}
