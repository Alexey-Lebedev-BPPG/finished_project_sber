import cls from './LikeButton.module.css';
import LikeSvg from 'shared/assets/icons/like.svg';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { Icon } from 'shared/ui/Icon/Icon';
import {
  useDeleteLikeProductMutation,
  useSetLikeProductMutation,
} from '../../api/productApi';
import { useCallback, type FC } from 'react';

interface IErrorResponse {
  data: { statusCode: number; message: string; error: string };
  status: number;
}

interface TLikeButtonProps {
  product: IProduct;
  userId: string;
}

export const LikeButton: FC<TLikeButtonProps> = props => {
  const { product, userId } = props;

  const [setLike] = useSetLikeProductMutation();
  const [deleteLike] = useDeleteLikeProductMutation();

  const isLike = product?.likes.some(l => l.userId === userId);

  const toggleLike = useCallback(async () => {
    let response;
    if (isLike) response = await deleteLike({ id: `${product.id}` });
    else response = await setLike({ id: `${product.id}` });

    if (response.error) {
      const error = response.error as IErrorResponse;
      toast.error(error.data.message);
    }
  }, [deleteLike, isLike, product.id, setLike]);

  return (
    <Icon
      clickable
      onClick={toggleLike}
      className={classNames(cls['card-favorite'], {
        [cls['card-favorite_is-active']]: isLike,
      })}
      Svg={LikeSvg}
    />
  );
};
