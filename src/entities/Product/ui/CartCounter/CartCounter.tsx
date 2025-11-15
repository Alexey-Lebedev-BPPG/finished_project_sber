import type { FC } from 'react';
import { useCount } from '../../model/lib/hooks/useCount';
import cls from './CartCounter.module.css';
import classNames from 'classnames';

interface TCartCounter {
  productId: string;
}
export const CartCounter: FC<TCartCounter> = props => {
  const { productId } = props;

  const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
    useCount(productId);

  return (
    <div className={classNames(cls['button-count'])}>
      <button
        onClick={handleDecrement}
        className={classNames(cls['button-count-minus'])}
      >
        -
      </button>
      <input
        onChange={handleSetCount}
        type='number'
        className={classNames(cls['button-count-num'])}
        value={count}
      />
      <button
        onClick={handleIncrement}
        className={classNames(cls['button-count-plus'])}
        disabled={count >= stock}
      >
        +
      </button>
    </div>
  );
};
