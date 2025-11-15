import type { FC } from 'react';
import { ButtonBack } from 'features/ButtonBack';
import { CardList } from 'widgets/CardList';
import { WithQuery } from 'shared/lib/WithQuery/WithQuery';
import { useProducts } from 'entities/Product';
import { useAppSelector } from 'shared/lib/hooks/redux';
import { getUserSelector } from 'entities/User';

const CardListWithQuery = WithQuery(CardList);

const FavoritesPage: FC = () => {
  const user = useAppSelector(getUserSelector);

  const { isLoading, isError, products, error } = useProducts(user?.id);

  return (
    <>
      <br />
      <ButtonBack />
      <CardListWithQuery
        title='Избранные'
        isLoading={isLoading}
        isError={isError}
        products={products}
        error={error}
      />
    </>
  );
};

export default FavoritesPage;
