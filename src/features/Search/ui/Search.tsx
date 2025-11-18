import cls from './Search.module.css';
import type { FC } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import SearchIcon from 'shared/assets/icons/search.svg';
import { useProductsSearchForm } from '../model/lib/hooks/useProductsSearchForm';
import { Input } from 'shared/ui/Input/Input';

export const Search: FC = () => {
  const { searchValue, setSearchValue } = useProductsSearchForm();

  const handleClearSearchText = () => setSearchValue('');

  return (
    <form className={cls['search']}>
      <Input
        type='text'
        className={cls['search-input']}
        placeholder='Поиск'
        value={searchValue}
        onChange={value => setSearchValue(value)}
      />
      {searchValue.length > 0 && (
        <Icon
          clickable
          className={cls['search-btn']}
          onClick={handleClearSearchText}
          Svg={SearchIcon}
        />
      )}
    </form>
  );
};
