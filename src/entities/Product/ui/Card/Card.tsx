import classNames from 'classnames';
import cls from './Card.module.css';
import { Price } from 'shared/ui/Price/Price';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux';
import { memo, useMemo, type FC } from 'react';
import { LikeButton } from '../LikeButton/LikeButton';
import { addCartProduct } from '../../model/slice/productSlice';
import { getCartProductsSelector } from '../../model/selectors/cartSelectors';
import { CartCounter } from '../CartCounter/CartCounter';
import { Button } from 'shared/ui/Button/Button';

interface CardProps {
  product: IProduct;
  isAuth: boolean;
  userId: string;
}

export const Card: FC<CardProps> = memo(props => {
  const { product, isAuth, userId } = props;
  const { discount, price, name, tags, id, images } = product;

  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(getCartProductsSelector);

  const isProductInCart = useMemo(
    () => cartProducts.some(p => p.id === id),
    [cartProducts, id],
  );

  const addProductToCart = (product: CartProduct) =>
    dispatch(addCartProduct(product));

  return (
    <article className={cls['card']}>
      <div
        className={classNames(
          cls['card-sticky'],
          cls['card-sticky_type_top-left'],
        )}
      >
        <span className={cls['card-discount']}>{discount}</span>
        {tags.length > 0 &&
          tags.map(t => (
            <span
              key={t}
              className={classNames(cls['tag'], cls['tag_type_new'])}
            >
              {t}
            </span>
          ))}
      </div>
      {isAuth && (
        <div
          className={classNames(
            cls['card-sticky'],
            cls['card-sticky_type_top-right'],
          )}
        >
          <LikeButton product={product} userId={userId} />
        </div>
      )}
      <Link className={cls['card-link']} to={`/products/${id}`}>
        <img
          src={images}
          alt={name}
          className={cls['card-image']}
          loading='lazy'
        />
        <div className={cls['card-desc']}>
          <Price price={price} discountPrice={discount} />
          <h3 className={cls['card-name']}>{name}</h3>
        </div>
      </Link>
      {isProductInCart ? (
        <CartCounter productId={id} />
      ) : (
        <Button
          onClick={() => {
            console.log('add cart');
            addProductToCart({ ...product, count: 1 });
          }}
          disabled={isProductInCart}
          className={classNames(
            cls['card-cart'],
            cls['card-btn'],
            cls['card-btn_type_primary'],
          )}
        >
          В корзину
        </Button>
      )}
    </article>
  );
});
