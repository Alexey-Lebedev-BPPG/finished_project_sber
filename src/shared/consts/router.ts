export enum AppRoutes {
	MAIN = 'home',
	FAVORITES = 'favorites',
	PRODUCTS = 'products',
	PROFILE = 'profile',
	CART = 'cart',
	SIGNUP = 'signup',
	SIGNIN = 'signin',
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteFavorites = () => '/favorites';
export const getRouteProducts = (productId: string) => `/products/${productId}`;
export const getRouteProfile = () => '/profile';
export const getRouteCart = () => '/cart';
export const getRouteSignUp = () => '/signup';
export const getRouteSignIn = () => '/signin';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
	[getRouteMain()]: AppRoutes.MAIN,
	[getRouteFavorites()]: AppRoutes.FAVORITES,
	[getRouteProducts(':productId')]: AppRoutes.PRODUCTS,
	[getRouteProfile()]: AppRoutes.PROFILE,
	[getRouteCart()]: AppRoutes.CART,
	[getRouteSignUp()]: AppRoutes.SIGNUP,
	[getRouteSignIn()]: AppRoutes.NOT_FOUND,
};
