import { CardList } from 'widgets/CardList';
import type { FC } from 'react';
import { WithQuery } from 'shared/lib/WithQuery/WithQuery';
import { useProducts } from 'entities/Product';
import { LoadMore } from 'features/LoadMore';
import { getUserSelector } from 'entities/User';
import { useAppSelector } from 'shared/lib/hooks/redux';

const CardListWithQuery = WithQuery(CardList);

const HomePage: FC = () => {
  const user = useAppSelector(getUserSelector);

  const { products, isLoading, isError, error } = useProducts(user?.id);

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
