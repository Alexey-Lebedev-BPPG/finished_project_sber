import type { FC } from 'react';
import { CartItem } from '../../CartItem';
import cls from '../../CartPage/CartPage.module.css';
import classNames from 'classnames';
import { useAppSelector } from 'shared/lib/hooks/redux';
import { getCartProductsSelector } from 'entities/Product';

export const CartList: FC = () => {
  const products = useAppSelector(getCartProductsSelector);

  return (
    <div className={classNames(cls['cart-list'])}>
      {products.map(p => (
        <CartItem product={p} key={p.id} />
      ))}
    </div>
  );
};
