import { CartPage } from 'pages/CartPage';
import { FavoritesPage } from 'pages/FavoritesPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProductPage } from 'pages/ProductPage';
import { ProfilePage } from 'pages/ProfilePage';
import { SignInPage } from 'pages/SignInPage';
import { SignUpPage } from 'pages/SignUpPage';
import {
  AppRoutes,
  getRouteCart,
  getRouteFavorites,
  getRouteMain,
  getRouteProducts,
  getRouteProfile,
  getRouteSignIn,
  getRouteSignUp,
} from 'shared/consts/router';
import { type AppRoutesProps } from 'shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    authOnly: true,
    element: <HomePage />,
    index: true,
    path: getRouteMain(),
  },
  [AppRoutes.CART]: {
    authOnly: true,
    element: <CartPage />,
    path: getRouteCart(),
  },
  [AppRoutes.FAVORITES]: {
    authOnly: true,
    element: <FavoritesPage />,
    path: getRouteFavorites(),
  },
  [AppRoutes.PRODUCTS]: {
    authOnly: true,
    element: <ProductPage />,
    path: getRouteProducts(':productId'),
  },
  [AppRoutes.PROFILE]: {
    authOnly: true,
    element: <ProfilePage />,
    path: getRouteProfile(),
  },
  [AppRoutes.SIGNUP]: {
    element: <SignUpPage />,
    path: getRouteSignUp(),
  },
  [AppRoutes.SIGNIN]: {
    element: <SignInPage />,
    path: getRouteSignIn(),
  },
  [AppRoutes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: '*',
  },
};
