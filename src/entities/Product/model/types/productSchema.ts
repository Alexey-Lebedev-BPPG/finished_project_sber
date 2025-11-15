export type ISort = 'high-price' | 'low-price' | 'newest' | 'oldest';



export interface ProductSchema {
  products: {
    sort: ISort;
    page: number;
    perPage: number;
    searchText: string;
  };
  cart: CartProduct[];
}
