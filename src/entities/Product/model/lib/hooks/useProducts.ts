import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'shared/lib/hooks/redux';
import { getProductsSelector } from '../../selectors/productSelectors';
import { useGetProductsQuery } from '../../../api/productApi';
import { isLiked } from 'shared/lib/helpers/isLiked';
import { getRouteFavorites } from 'shared/consts/router';
import { getUserSelector } from 'entities/User';
import { useMemo } from 'react';

export const useProducts = () => {
  const { pathname } = useLocation();
  const user = useAppSelector(getUserSelector);

  const productSetting = useAppSelector(getProductsSelector);

  const isFavoritesPage = pathname === getRouteFavorites();
  const { isLoading, isError, error, data, isFetching } = useGetProductsQuery({
    ...productSetting,
    perPage: isFavoritesPage ? undefined : productSetting.perPage,
  });

  const products = useMemo(() => {
    let productsLocal = data?.products || [];

    if (isFavoritesPage) {
      productsLocal = productsLocal.filter(product =>
        isLiked(product.likes, user?.id),
      );
    }

    return productsLocal;
  }, [data]);

  const productsCount = useMemo(() => data?.length || 0, [data?.length]);

  return { products, isLoading, isError, isFetching, error, productsCount };
};
