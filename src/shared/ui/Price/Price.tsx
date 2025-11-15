import classNames from 'classnames';
import cls from './Price.module.css';
import type { FC } from 'react';

interface TPriceProps {
  price: number;
  discountPrice: number;
}

export const Price: FC<TPriceProps> = props => {
  const { price, discountPrice } = props;

  return (
    <div className={classNames(cls['price-small'], cls['price-wrap'])}>
      <span className={classNames(cls['price_old'], cls['price_left'])}>
        {`${price}₽`}
      </span>
      <span className={classNames(cls['price_discount'], cls['price'])}>
        {`${price - discountPrice}₽`}
      </span>
    </div>
  );
};
