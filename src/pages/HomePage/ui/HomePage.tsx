import { CardList } from 'widgets/CardList';
import type { FC } from 'react';
import { WithQuery } from 'shared/lib/WithQuery/WithQuery';
import { LoadMore, useProducts } from 'entities/Product';

const CardListWithQuery = WithQuery(CardList);

const HomePage: FC = () => {
  const { products, isLoading, isError, error } = useProducts();

  return (
    <>
      <CardListWithQuery
        title='Лакомства'
        isLoading={isLoading}
        isError={isError}
        products={products}
        error={error}
      />
      <LoadMore />
    </>
  );
};

export default HomePage;
