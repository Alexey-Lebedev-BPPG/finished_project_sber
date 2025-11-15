import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'shared/lib/hooks/redux';
import { getProductsSelector } from '../../selectors/productSelectors';
import { useGetProductsQuery } from '../../../api/productApi';
import { getUserSelector } from 'entities/User';
import { isLiked } from 'shared/lib/helpers/isLiked';

export const useProducts = () => {
	const { pathname } = useLocation();

	const { searchText, page, perPage, sort } =
		useAppSelector(getProductsSelector);

	const isFavoritesPage = pathname === '/favorites';
	const { isLoading, isError, error, data, isFetching } = useGetProductsQuery({
		searchText,
		sort,
		page,
		perPage: isFavoritesPage ? undefined : perPage,
	});

	let products = data?.products || [];

	const user = useAppSelector(getUserSelector);

	if (isFavoritesPage) {
		products = products.filter((product) => isLiked(product.likes, user?.id));
	}

	const productsCount = data?.length || 0;

	return {
		products,
		isLoading,
		isError,
		isFetching,
		error,
		productsCount,
	};
};
