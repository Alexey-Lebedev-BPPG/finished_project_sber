import { Card } from 'entities/Product';
import cls from './CardList.module.css';
import type { FC } from 'react';
import { getAccessTokenSelector, getUserSelector } from 'entities/User';
import { useAppSelector } from 'shared/lib/hooks/redux';

interface CardListProps {
  title: string;
  products: IProduct[];
}

export const CardList: FC<CardListProps> = props => {
  const { products, title } = props;

  const accessToken = useAppSelector(getAccessTokenSelector);
  const user = useAppSelector(getUserSelector);

  if (products.length < 1)
    return <h1 className={cls['header-title']}>Товар не найден</h1>;

  return (
    <div className={cls['card-list']}>
      <div className={cls['card-list-header']}>
        <h2 className={cls['card-list-title']}>{title}</h2>
      </div>
      <div className={cls['card-list-items']}>
        {products.map(product => (
          <Card
            key={product.id}
            product={product}
            isAuth={Boolean(accessToken)}
            userId={user?.id || ''}
          />
        ))}
      </div>
    </div>
  );
};
