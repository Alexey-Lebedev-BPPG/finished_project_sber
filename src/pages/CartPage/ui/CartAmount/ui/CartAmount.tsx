import type { FC } from 'react';
import cls from '../../CartPage/CartPage.module.css';
import classNames from 'classnames';
import { Button } from 'shared/ui/Button/Button';
import { useAppSelector } from 'shared/lib/hooks/redux';
import { getCartProductsSelector } from 'entities/Product';

export const CartAmount: FC = () => {
  const products = useAppSelector(getCartProductsSelector);

  const allPrice = products.reduce((acc, p) => p.price * p.count + acc, 0);
  const allDiscount = products.reduce(
    (acc, p) => p.discount * p.count + acc,
    0,
  );

  const handleSubmitCart = () => {
    const order = products.map(p => ({ id: p.id, count: p.count }));
    console.log('Отправка заказа на сервер: ', JSON.stringify(order, null, 2));
  };

  return (
    <div className={classNames(cls['cart-amount'])}>
      <h1 className={classNames(cls['cart-amount-title'])}>Ваша корзина</h1>
      <div className={classNames(cls['cart-amount-table'])}>
        <div className={classNames(cls['cart-amount-table-row'])}>
          <span className={classNames(cls['cart-amount-table-title'])}>
            {`Товары (${products.length})`}
          </span>
          <span className={classNames(cls['cart-amount-table-value'])}>
            {`${allPrice} ₽`}
          </span>
        </div>
        <div className={classNames(cls['cart-amount-table-row'])}>
          <span className={classNames(cls['cart-amount-table-title'])}>
            Скидка
          </span>
          <span
            className={classNames(
              cls['cart-amount-table-value'],
              cls['cart-amount-table-value-discount'],
            )}
          >
            {`${allDiscount} ₽`}
          </span>
        </div>
      </div>
      <div className={classNames(cls['cart-amount-total-cost'])}>
        <h2 className={classNames(cls['cart-amount-total-cost-title'])}>
          Общая стоимость
        </h2>
        <span className={classNames(cls['cart-amount-total-cost-value'])}>
          {`${allPrice - allDiscount} ₽`}
        </span>
      </div>
      <Button
        onClick={handleSubmitCart}
        className={classNames(
          cls['button'],
          cls['button_type_primary'],
          cls['button_type_wide'],
        )}
      >
        Оформить заказ
      </Button>
    </div>
  );
};
