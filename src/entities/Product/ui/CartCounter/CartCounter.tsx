import type { FC } from 'react';
import { useCount } from '../../model/lib/hooks/useCount';
import cls from './CartCounter.module.css';
import classNames from 'classnames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface TCartCounter {
  productId: string;
}
export const CartCounter: FC<TCartCounter> = props => {
  const { productId } = props;

  const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
    useCount(productId);

  return (
    <div className={classNames(cls['button-count'])}>
      <Button
        onClick={handleDecrement}
        className={classNames(cls['button-count-minus'])}
      >
        -
      </Button>
      <Input
        onChange={handleSetCount}
        type='number'
        className={classNames(cls['button-count-num'])}
        value={count}
      />
      <Button
        onClick={handleIncrement}
        className={classNames(cls['button-count-plus'])}
        disabled={count >= stock}
      >
        +
      </Button>
    </div>
  );
};
