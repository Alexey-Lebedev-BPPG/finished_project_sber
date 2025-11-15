import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux';
import type { ISort } from '../../types/productSchema';
import { getSortSelector } from '../../selectors/productSelectors';
import { setSort } from '../../slice/productSlice';

interface SortParams {
  title: string;
  value: ISort;
  href: string;
}
export const useSort = () => {
  const dispatch = useAppDispatch();

  const sort = useAppSelector(getSortSelector);

  const setSortLocal = (newSort: ISort) => {
    dispatch(setSort(newSort));
  };

  const sortParams: SortParams[] = [
    { title: 'Дешевые', value: 'low-price', href: '#' },
    { title: 'Дорогие', value: 'high-price', href: '#' },
    { title: 'Новые', value: 'newest', href: '#' },
    { title: 'Старые', value: 'oldest', href: '#' },
  ];

  return { sort, setSort: setSortLocal, sortParams };
};
