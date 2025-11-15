export {
	productReducer,
	productSlice,
	setPage,
	setSearchText,
	setSort,
} from './model/slice/productSlice';
export type { ProductSchema } from './model/types/productSchema';
export {
	getPageSelector,
	getPerPageSelector,
	getProductsSelector,
	getSearchTextSelector,
	getSortSelector,
} from './model/selectors/productSelectors';
export {
	useDeleteLikeProductMutation,
	useGetProductQuery,
	useGetProductsQuery,
	useSetLikeProductMutation,
} from './api/productApi';
export { useProducts } from './model/lib/hooks/useProducts';
