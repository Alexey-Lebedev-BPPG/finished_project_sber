declare module '*.module.scss' {
	const value: Record<string, string>;
	export default value;
}

declare module '*.module.sass' {
	const value: Record<string, string>;
	export default value;
}

declare module '*.module.css' {
	const value: Record<string, string>;
	export default value;
}

declare module '*.css' {
	const value: Record<string, string>;
	export default value;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.webp';
declare module '*.avif';
declare module '*.bmp';
declare module '*.gif';
declare module '*.json';

declare module '*.svg' {
	import { SVGProps, FunctionComponent } from 'react';

	const SVG: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
	export default SVG;
}

interface IResponse<R = unknown> {
	data: R;
	status: number;
	success?: boolean;
}

interface IAction<P = unknown> {
	payload?: P;
	type: string;
}

interface IMessage {
	message: string;
}

interface IErrorMessage extends IMessage {
	error: string;
	statusCode: number;
}

// ******************8

type ProductsData = {
	products: Product[];
	length: number;
};

type Category = {
	id: number;
	name: string;
	slug: string;
};

type Review = BaseDates & {
	id: string;
	user: User;
	text: string;
	rating: number;
	product: ReviewProduct;
};

type Role = 'USER';

type FavoritePost = {
	id: string;
	userId: string;
	postId: string;
	post: Post;
};

type Post = BaseDates & {
	id: string;
	userId: string;
	title: string;
	slug: string;
	description: string;
	body: string;
	images: string;
	tags: string[];
	isPublished: boolean;
	favoritesCount: number;
};

type BaseLike = {
	id: string;
	userId: string;
	productId: string;
};

type Like = BaseLike & {
	user: LikeUser;
};

type ReviewUserLike = BaseLike & {
	product: ReviewProduct;
};

type BaseUser = {
	id: string;
	roles: Role[];
	name: string;
	email: string;
	phone: string;
	avatarPath: string;
	about: string;
};

type User = BaseUser & {
	likes: ReviewUserLike[];
	favoritesPost: FavoritePost[];
};

type LikeUser = BaseDates &
	BaseUser & {
		provider: null;
		isAdmin: boolean;
		isBlocked: boolean;
		password: string;
	};

type BaseProduct = BaseDates & {
	id: string;
	name: string;
	description: string;
	price: number;
	images: string;
	slug: string;
	discount: number;
	isPublished: boolean;
	stock: number;
	tags: string[];
};

type Product = BaseProduct & {
	reviews: Review[];
	category: Category;
	user: User;
	likes: Like[];
};

type ReviewProduct = BaseProduct & {
	categoryId: number;
	userId: string;
	wight: string;
};

type CartProduct = Product & {
	count: number;
};

type BaseDates = {
	createdAt: string;
	updatedAt?: string;
};

type Sort = 'high-price' | 'low-price' | 'newest' | 'oldest';

type Token = {
	accessToken: string;
};
