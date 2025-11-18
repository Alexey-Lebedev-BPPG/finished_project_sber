import TrashIcon from 'shared/assets/icons/trash.svg';
import { Link } from 'react-router-dom';
import cls from '../../CartPage/CartPage.module.css';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Icon } from 'shared/ui/Icon/Icon';
import type { FC } from 'react';
import { CartCounter, deleteCartProduct } from 'entities/Product';

interface CartItemProps {
  product: CartProduct;
}
export const CartItem: FC<CartItemProps> = props => {
  const {
    product: { id, name, images, price, discount },
  } = props;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteCartProduct(id));

  return (
    <div className={classNames(cls['cart-item'])}>
      <div className={classNames(cls['cart-item-desc'])}>
        <img
          src={images}
          alt={name}
          className={classNames(cls['cart-item-image'])}
        />
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div style={{ display: 'flex', gap: '20px', flexGrow: 1 }}>
            <Link
              className={classNames(cls['cart-item-title'])}
              to={`/products/${id}`}
            >
              <h2>{name}</h2>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CartCounter productId={id} />
              <div className={classNames(cls['cart-item-price'])}>
                <div
                  className={classNames(cls['price-big'], cls['price-wrap'])}
                >
                  <span
                    className={classNames(cls['price_old'], cls['price_right'])}
                  >
                    {price}
                  </span>
                  <span
                    className={classNames(cls['price_discount'], cls['price'])}
                  >
                    {price - discount}
                  </span>
                </div>
              </div>
            </div>
            <Icon
              Svg={TrashIcon}
              onClick={handleDelete}
              className={classNames(cls['cart-item-bnt-trash'])}
              clickable
            />
          </div>
        </div>
      </div>
    </div>
  );
};
