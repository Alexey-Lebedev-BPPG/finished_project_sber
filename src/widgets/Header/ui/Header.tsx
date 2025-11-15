import classNames from 'classnames';
import cls from './Header.module.css';
import { Logo } from 'features/Logo';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'shared/lib/hooks/redux';
import { getAccessTokenSelector, getUserSelector } from 'entities/User';
import { getCartProductsSelector, useProducts } from 'entities/Product';
import { isLiked } from 'shared/lib/helpers/isLiked';
import {
  getRouteCart,
  getRouteFavorites,
  getRouteProfile,
  getRouteSignIn,
} from 'shared/consts/router';
import type { FC } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import FavoritesIcon from 'shared/assets/icons/favorites.svg';
import CartIcon from 'shared/assets/icons/cart.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { Search } from 'features/Search';

export const Header: FC = () => {
  const user = useAppSelector(getUserSelector);
  const cartProducts = useAppSelector(getCartProductsSelector);

  const { products } = useProducts(user?.id);

  const likeCount = products.filter(product =>
    isLiked(product.likes, user?.id),
  ).length;

  const accessToken = useAppSelector(getAccessTokenSelector);

  return (
    <header className={cls.header}>
      <div className={classNames('container', cls['header-wrapper'])}>
        <Logo />
        <Search />
        <div className={cls['header-icons-menu']}>
          <Link
            className={cls['header-favorites-link']}
            to={getRouteFavorites()}
          >
            <Icon Svg={FavoritesIcon} />
            <span className={cls['header-icon-bubble']}>{likeCount}</span>
          </Link>
          <Link className={cls['header-favorites-link']} to={getRouteCart()}>
            <Icon Svg={CartIcon} />
            <span className={cls['header-icon-bubble']}>
              {cartProducts.length}
            </span>
          </Link>
          {accessToken && (
            <>
              <Link
                className={cls['header-icons-menu-item']}
                to={getRouteProfile()}
              >
                <Icon Svg={ProfileIcon} />
              </Link>
              <Link
                className={cls['header-icons-menu-item']}
                to={getRouteSignIn()}
              >
                Выйти
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
