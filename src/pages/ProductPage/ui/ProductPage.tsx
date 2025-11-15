import cls from './ProductPage.module.css';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import TruckSVG from 'shared/assets/icons/truck.svg';
import QualitySVG from 'shared/assets/icons/quality.svg';
import { Rating } from 'shared/ui/Rating/Rating';
import { ButtonBack } from 'features/ButtonBack';
import { ReviewList } from 'widgets/ReviewList/ui/ReviewList/ReviewList';
import { useAppSelector } from 'shared/lib/hooks/redux';
import type { FC } from 'react';
import {
  CartCounter,
  getCartProductsSelector,
  ProductCartCounter,
} from 'entities/Cart';
import { LikeButton, useGetProductQuery } from 'entities/Product';
import { Icon } from 'shared/ui/Icon/Icon';
import { getRouteMain } from 'shared/consts/router';

const ProductPage: FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const productId = pathname.split(getRouteMain()).at(-1) || '';

  const cartProducts = useAppSelector(getCartProductsSelector);

  const { data: product } = useGetProductQuery({ id: productId });

  if (!product) return null;

  const { id, name, images, description, price, discount } = product;

  const isProductInCart = !!cartProducts.find(p => p.id === id);

  return (
    <>
      <ButtonBack />
      <h1 className={classNames(cls['header-title'])}>{name}</h1>
      <p>
        Артикул: <b>2388907</b>
      </p>
      <Rating rating={3} />
      <div className={classNames(cls['product'])}>
        <div className={classNames(cls['product-img-wrapper'])}>
          <img src={images} alt={description} />
        </div>
        <div className={classNames(cls['product-desc'])}>
          <div className={classNames(cls['price-big'], cls['price-wrap'])}>
            <span className={classNames(cls['price_old'], cls['price_left'])}>
              {`${price} ₽`}
            </span>
            <span className={classNames(cls['price_discount'], cls['price'])}>
              {`${price - discount} ₽`}
            </span>
          </div>

          {isProductInCart ? (
            <CartCounter productId={id} />
          ) : (
            <ProductCartCounter product={product} />
          )}

          <LikeButton product={product} />
          <div className={classNames(cls['product-delivery'])}>
            {/* <img src={truckSVG} alt='truck' /> */}
            <Icon Svg={TruckSVG} />
            <div className={classNames(cls['product-right'])}>
              <h3 className={classNames(cls['product-name'])}>
                Доставка по всему Миру!
              </h3>
              <p className={classNames(cls['product-text'])}>
                Доставка курьером —{' '}
                <span className={cls['product-bold']}> от 399 ₽</span>
              </p>
              <p className={classNames(cls['product-text'])}>
                Доставка в пункт выдачи —
                <span className={classNames(cls['product-bold'])}>
                  {' '}
                  от 199 ₽
                </span>
              </p>
            </div>
          </div>
          <div className={classNames(cls['product-delivery'])}>
            {/* <img src={qualitySVG} alt='quality' /> */}
            <Icon Svg={QualitySVG} />
            <div className={classNames(cls['product-right'])}>
              <h3 className={classNames(cls['product-name'])}>
                Гарантия качества
              </h3>
              <p className={classNames(cls['product-text'])}>
                Если Вам не понравилось качество нашей продукции, мы вернем
                деньги, либо сделаем все возможное, чтобы удовлетворить ваши
                нужды.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(cls['product-box'])}>
        <h2 className={classNames(cls['product-title'])}>Описание</h2>
        <p className={classNames(cls['product-subtitle'])}>Описание demo</p>
        <h2 className={classNames(cls['product-title'])}>Характеристики</h2>
        <div className={classNames(cls['product-grid'])}>
          <div className={classNames(cls['product-naming'])}>Вес</div>
          <div className={classNames(cls['product-description'])}>
            1 шт 120-200 грамм
          </div>
          <div className={classNames(cls['product-naming'])}>Цена</div>
          <div className={classNames(cls['product-description'])}>
            490 ₽ за 100 грамм
          </div>
          <div className={classNames(cls['product-naming'])}>Польза</div>
          <div className={classNames(cls['product-description'])}>
            <p>
              Большое содержание аминокислот и микроэлементов оказывает
              положительное воздействие на общий обмен веществ собаки.
            </p>
            <p>Способствуют укреплению десен и жевательных мышц.</p>
            <p>
              Развивают зубочелюстной аппарат, отвлекают собаку во время смены
              зубов.
            </p>
            <p>
              Имеет цельную волокнистую структуру, при разжевывание получается
              эффект зубной щетки, лучше всего очищает клыки собак.
            </p>
            <p>Следует учесть высокую калорийность продукта.</p>
          </div>
        </div>
      </div>
      <ReviewList product={product} />
    </>
  );
};

export default ProductPage;
