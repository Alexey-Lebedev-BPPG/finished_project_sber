import { Card } from 'entities/Product';
import cls from './CardList.module.css';
import type { FC } from 'react';

interface CardListProps {
  title: string;
  products: Product[];
}

export const CardList: FC<CardListProps> = props => {
  const { products, title } = props;

  if (products.length < 1)
    return <h1 className={cls['header-title']}>Товар не найден</h1>;

  return (
    <div className={cls['card-list']}>
      <div className={cls['card-list-header']}>
        <h2 className={cls['card-list-title']}>{title}</h2>
      </div>
      <div className={cls['card-list-items']}>
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
