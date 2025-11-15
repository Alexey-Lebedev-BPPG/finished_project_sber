import cls from './Search.module.css';
import type { FC } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import SearchIcon from 'shared/assets/icons/search.svg';
import { useProductsSearchForm } from '../model/lib/hooks/useProductsSearchForm';

export const Search: FC = () => {
  const { searchValue, setSearchValue } = useProductsSearchForm();

  const handleClearSearchText = () => setSearchValue('');

  return (
    <form className={cls['search']}>
      <input
        type='text'
        className={cls['search-input']}
        placeholder='Поиск'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      {searchValue.length > 0 && (
        <button className={cls['search-btn']} onClick={handleClearSearchText}>
          <Icon Svg={SearchIcon} />
        </button>
      )}
    </form>
  );
};
