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

interface Review extends BaseDates {
  id: string;
  user: User;
  text: string;
  rating: number;
  product: ReviewProduct;
}

interface Post extends BaseDates {
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
}

interface BaseLike {
  id: string;
  userId: string;
  productId: string;
}

interface Like extends BaseLike {
  user: LikeUser;
}

interface ReviewUserLike extends BaseLike {
  product: ReviewProduct;
}

interface BaseUser {
  id: string;
  roles: Role[];
  name: string;
  email: string;
  phone: string;
  avatarPath: string;
  about: string;
}

interface User extends BaseUser {
  likes: ReviewUserLike[];
  favoritesPost: {
    id: string;
    userId: string;
    postId: string;
    post: Post;
  }[];
}

interface LikeUser extends BaseDates, BaseUser {
  provider: null;
  isAdmin: boolean;
  isBlocked: boolean;
  password: string;
}

interface BaseProduct extends BaseDates {
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
}

interface Product extends BaseProduct {
  reviews: Review[];
  category: { id: number; name: string; slug: string };
  user: User;
  likes: Like[];
}

interface ReviewProduct extends BaseProduct {
  categoryId: number;
  userId: string;
  wight: string;
}

interface CartProduct extends Product {
  count: number;
}

interface BaseDates {
  createdAt: string;
  updatedAt?: string;
}
