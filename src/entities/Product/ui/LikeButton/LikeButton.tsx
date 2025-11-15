import cls from './LikeButton.module.css';
import LikeSvg from 'shared/assets/icons/like.svg';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { useAppSelector } from 'shared/lib/hooks/redux';
import { getAccessTokenSelector, getUserSelector } from 'entities/User';
import { Icon } from 'shared/ui/Icon/Icon';
import {
  useDeleteLikeProductMutation,
  useSetLikeProductMutation,
} from '../../api/productApi';
import type { FC } from 'react';

interface IErrorResponse {
  data: { statusCode: number; message: string; error: string };
  status: number;
}

interface TLikeButtonProps {
  product: Product;
}

export const LikeButton: FC<TLikeButtonProps> = props => {
  const { product } = props;

  const accessToken = useAppSelector(getAccessTokenSelector);
  const user = useAppSelector(getUserSelector);

  const [setLike] = useSetLikeProductMutation();
  const [deleteLike] = useDeleteLikeProductMutation();

  const isLike = product?.likes.some(l => l.userId === user?.id);

  const toggleLike = async () => {
    if (!accessToken) {
      toast.warning('Вы не авторизованы');
      return;
    }
    let response;
    if (isLike) response = await deleteLike({ id: `${product.id}` });
    else response = await setLike({ id: `${product.id}` });

    if (response.error) {
      const error = response.error as IErrorResponse;
      toast.error(error.data.message);
    }
  };

  return (
    <button
      className={classNames(cls['card-favorite'], {
        [cls['card-favorite_is-active']]: isLike,
      })}
      onClick={toggleLike}
    >
      <Icon Svg={LikeSvg} />
    </button>
  );
};
