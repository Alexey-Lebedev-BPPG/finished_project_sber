import { rtkApi } from 'shared/api/rtkApi';
import urls from 'shared/consts/urls';
import type { ISort } from '../model/types/productSchema';

interface ProductsResponse {
  products: Product[];
  length: number;
}

interface SetLikeResponse {
  like: {
    id: string;
    userId: string;
    productId: string;
  };
  message: string;
}
interface DeleteLikeResponse {
  product: {
    id: string;
    userId: string;
    productId: string;
  };
  message: string;
}
interface ProductRequest {
  page: number;
  perPage?: number;
  sort: ISort;
  searchText: string;
}

export const productApi = rtkApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<ProductsResponse, ProductRequest>({
      query: ({ searchText: searchTerm, sort, page, perPage }) => {
        return {
          url: urls.products.products,
          params: {
            sort,
            searchTerm: searchTerm.length ? searchTerm : undefined,
            perPage: perPage ? page * perPage : undefined,
          },
        };
      },
      providesTags: [{ type: 'Products', id: 'list' }],
    }),
    getProduct: builder.query<Product, Pick<Product, 'id'>>({
      query: ({ id }) => ({ url: urls.products.productById(id) }),
      providesTags: productFromBE => [
        { type: 'Products', id: productFromBE?.id },
      ],
    }),
    createProduct: builder.mutation<Product, Product>({
      query: product => ({
        url: urls.products.products,
        method: 'POST',
        body: product,
      }),
      invalidatesTags: [{ type: 'Products', id: 'list' }],
    }),
    deleteProduct: builder.mutation<Product, Pick<Product, 'id'>>({
      query: ({ id }) => ({
        url: urls.products.productById(id),
        method: 'DELETE',
      }),
      invalidatesTags: productFromBE => [
        { type: 'Products', id: 'list' },
        { type: 'Products', id: productFromBE?.id },
      ],
    }),
    setLikeProduct: builder.mutation<SetLikeResponse, Pick<Product, 'id'>>({
      query: ({ id }) => ({
        url: urls.products.productLike(id),
        method: 'PUT',
      }),
      invalidatesTags: productFromBE => [
        { type: 'Products', id: 'list' },
        { type: 'Products', id: productFromBE?.like.productId },
      ],
    }),
    deleteLikeProduct: builder.mutation<
      DeleteLikeResponse,
      Pick<Product, 'id'>
    >({
      query: ({ id }) => ({
        url: urls.products.productLike(id),
        method: 'DELETE',
      }),
      invalidatesTags: productFromBE => [
        { type: 'Products', id: 'list' },
        { type: 'Products', id: productFromBE?.product.productId },
      ],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useSetLikeProductMutation,
  useDeleteLikeProductMutation,
} = productApi;
