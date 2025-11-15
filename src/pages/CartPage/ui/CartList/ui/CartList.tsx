import type { FC } from 'react';
import { CartItem } from '../../CartItem';
import cls from '../../CartPage/CartPage.module.css';
import classNames from 'classnames';

interface CartListProps {
  products: CartProduct[];
}

export const CartList: FC<CartListProps> = props => {
  const { products } = props;

  return (
    <div className={classNames(cls['cart-list'])}>
      {products.map(p => (
        <CartItem product={p} key={p.id} />
      ))}
    </div>
  );
};
