import type { FC } from 'react';
import { ButtonBack } from 'features/ButtonBack';
import { CardList } from 'widgets/CardList';
import { WithQuery } from 'shared/lib/WithQuery/WithQuery';
import { useProducts } from 'entities/Product';

const CardListWithQuery = WithQuery(CardList);

const FavoritesPage: FC = () => {
  const { isLoading, isError, products, error } = useProducts();

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
