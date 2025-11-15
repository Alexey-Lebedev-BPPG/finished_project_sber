import { getPageSelector, setPage, useProducts } from 'entities/Product';
import { getUserSelector } from 'entities/User';
import { type RefObject, useCallback, useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux';

interface UseLoadMoreParams {
  ref: RefObject<HTMLDivElement | null>;
}

export const useLoadMore = ({ ref }: UseLoadMoreParams) => {
  const dispatch = useAppDispatch();

  const page = useAppSelector(getPageSelector);
  const user = useAppSelector(getUserSelector);

  const { products, isFetching, productsCount } = useProducts(user?.id);

  const isEndOfList = products.length >= productsCount;

  const fetchMoreProducts = useCallback(
    () => !isEndOfList && !isFetching && dispatch(setPage(page + 1)),
    [isEndOfList, isFetching, page, dispatch],
  );

  useLayoutEffect(() => {
    let observer: IntersectionObserver;

    if (!isEndOfList && products.length) {
      const options: IntersectionObserverInit = { threshold: 0.5 };
      const callback: IntersectionObserverCallback = entries =>
        entries[0].isIntersecting && fetchMoreProducts();
      observer = new IntersectionObserver(callback, options);
      if (ref && ref.current) observer.observe(ref.current);
    }

    return () => {
      observer?.disconnect();
    };
  }, [fetchMoreProducts, isEndOfList, products.length, ref]);

  return { isEndOfList, isFetching, isEmpty: products.length < 1 };
};
