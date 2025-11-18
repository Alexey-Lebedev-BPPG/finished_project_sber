import cls from './ProductCartCounter.module.css';
import classNames from 'classnames';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import type { FC } from 'react';
import { addCartProduct } from 'entities/Product';
import { useProductCartCounter } from '../model/lib/hooks/useProductCartCounter';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProductCartCounterProps {
  product: IProduct;
}
export const ProductCartCounter: FC<ProductCartCounterProps> = props => {
  const { product } = props;

  const { count, handleCount, handleCountMinus, handleCountPlus } =
    useProductCartCounter();

  const dispatch = useAppDispatch();
  const addProductToCart = (product: CartProduct) =>
    dispatch(addCartProduct(product));

  return (
    <div className={classNames('product-btn-wrap')}>
      <div className={cls['button-count']}>
        <Button
          className={cls['button-count-minus']}
          onClick={handleCountMinus}
        >
          -
        </Button>
        <Input
          type='number'
          className={cls['button-count-num']}
          value={count}
          onChange={handleCount}
        />
        <Button className={cls['button-count-plus']} onClick={handleCountPlus}>
          +
        </Button>
      </div>
      <Button
        onClick={() => {
          console.log('add cart Product');
          addProductToCart({ ...product, count });
        }}
        className={classNames(cls['button'], cls['button_type_primary'])}
      >
        В корзину
      </Button>
    </div>
  );
};
