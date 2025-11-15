import classNames from 'classnames';
import cls from './Card.module.css';
import { Price } from 'shared/ui/Price/Price';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux';
import {
  addCartProduct,
  CartCounter,
  getCartProductsSelector,
} from 'entities/Cart';
import { LikeButton } from '../LikeButton/LikeButton';
import type { FC } from 'react';

interface CardProps {
  product: Product;
}

export const Card: FC<CardProps> = props => {
  const { product } = props;
  const { discount, price, name, tags, id, images } = product;

  const dispatch = useAppDispatch();

  const cartProducts = useAppSelector(getCartProductsSelector);

  const isProductInCart = cartProducts.some(p => p.id === id);

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
      <div
        className={classNames(
          cls['card-sticky'],
          cls['card-sticky_type_top-right'],
        )}
      >
        <LikeButton product={product} />
      </div>
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
        <button
          onClick={() => addProductToCart({ ...product, count: 1 })}
          disabled={isProductInCart}
          className={classNames(
            cls['card-cart'],
            cls['card-btn'],
            cls['card-btn_type_primary'],
          )}
        >
          В корзину
        </button>
      )}
    </article>
  );
};
