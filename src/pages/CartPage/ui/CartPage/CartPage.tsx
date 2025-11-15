import cls from './CartPage.module.css';
import classNames from 'classnames';
import { CartList } from '../CartList';
import { CartAmount } from '../CartAmount';
import { useAppSelector } from 'shared/lib/hooks/redux';
import type { FC } from 'react';
import { getCartProductsSelector } from 'entities/Product';

const CartPage: FC = () => {
  const products = useAppSelector(getCartProductsSelector);

  if (!products.length) {
    return <h1 className={cls['header-title']}>Товаров нет корзине</h1>;
  }

  return (
    <div className={classNames(cls['content'], cls['container'])}>
      <div className={classNames(cls['content-cart'])}>
        <div className={classNames(cls['cart-title'])}>
          <span>{products.length}</span> в корзине
        </div>
        <CartList products={products} />
        <CartAmount products={products} />
      </div>
    </div>
  );
};

export default CartPage;
