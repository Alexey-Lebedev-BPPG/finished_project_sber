import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'shared/lib/hooks/redux';
import { getProductsSelector } from '../../selectors/productSelectors';
import { useGetProductsQuery } from '../../../api/productApi';
import { isLiked } from 'shared/lib/helpers/isLiked';
import { getRouteFavorites } from 'shared/consts/router';

export const useProducts = (userId?: string) => {
  const { pathname } = useLocation();

  const { searchText, page, perPage, sort } =
    useAppSelector(getProductsSelector);

  const isFavoritesPage = pathname === getRouteFavorites();
  const { isLoading, isError, error, data, isFetching } = useGetProductsQuery({
    searchText,
    sort,
    page,
    perPage: isFavoritesPage ? undefined : perPage,
  });

  let products = data?.products || [];

  if (isFavoritesPage) {
    products = products.filter(product => isLiked(product.likes, userId));
  }

  const productsCount = data?.length || 0;

  return { products, isLoading, isError, isFetching, error, productsCount };
};
