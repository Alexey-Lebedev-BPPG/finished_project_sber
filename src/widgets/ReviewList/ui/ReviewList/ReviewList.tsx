import classNames from 'classnames';
import cls from './ReviewList.module.css';
import { Rating } from 'shared/ui/Rating/Rating';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import type { FC } from 'react';

interface ReviewListProps {
  product: Product;
}
export const ReviewList: FC<ReviewListProps> = props => {
  const { product } = props;

  return (
    <div className={classNames(cls['product-reviews'])}>
      {product.reviews.map(review => (
        <div className={cls['review']} key={review.id}>
          <div className={cls['review-header']}>
            <div className={cls['review-name']}>{review.user.name}</div>
            <div className={cls['review-date']}>
              {new Date(review.createdAt).toLocaleDateString('ru-RU')}
            </div>
          </div>
          <Rating rating={review.rating} />
          <p className={cls['review-text']}>{review.text}</p>
        </div>
      ))}
      <h2>Отзыв о товаре {product.name}</h2>
      <ReviewForm />
    </div>
  );
};
