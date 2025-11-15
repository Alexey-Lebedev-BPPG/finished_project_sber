import { type ChangeEvent, type FC } from 'react';
import { useSort } from '../../model/lib/hooks/useSort';
import type { ISort } from '../../model/types/productSchema';

export const Sort: FC = () => {
  const { sort, setSort, sortParams } = useSort();

  const handleSortSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value as ISort;
    setSort(newSort);
  };

  return (
    <select value={sort} onChange={handleSortSelect}>
      {sortParams.map(p => (
        <option key={p.title} value={p.value}>
          {p.title}
        </option>
      ))}
    </select>
  );
};
