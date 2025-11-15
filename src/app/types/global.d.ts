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

interface IProduct extends BaseProduct {
  reviews: Review[];
  category: { id: number; name: string; slug: string };
  user: User;
  likes: Like[];
}

interface CartProduct extends IProduct {
  count: number;
}

interface ReviewProduct extends BaseProduct {
  categoryId: number;
  userId: string;
  wight: string;
}

interface Review extends BaseDates {
  id: string;
  user: User;
  text: string;
  rating: number;
  product: ReviewProduct;
}

interface BaseLike {
  id: string;
  userId: string;
  productId: string;
}

interface Like extends BaseLike {
  user: LikeUser;
}

interface BaseUser {
  id: string;
  roles: string[];
  name: string;
  email: string;
  phone: string;
  avatarPath: string;
  about: string;
}

interface LikeUser extends BaseDates, BaseUser {
  provider: null;
  isAdmin: boolean;
  isBlocked: boolean;
  password: string;
}

interface ReviewUserLike extends BaseLike {
  product: ReviewProduct;
}

interface User extends BaseUser {
  likes: ReviewUserLike[];
  favoritesPost: {
    id: string;
    userId: string;
    postId: string;
    post: {
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
      createdAt: string;
      updatedAt?: string;
    };
  }[];
}

interface BaseDates {
  createdAt: string;
  updatedAt?: string;
}
