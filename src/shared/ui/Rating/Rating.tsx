import type { FC } from 'react';
import Star from 'shared/assets/icons/star.svg';
import { Icon } from 'shared/ui/Icon/Icon';

interface TRating {
  rating?: number;
  isEdit?: boolean;
  onChange?: (rating: number) => void;
}

export const Rating: FC<TRating> = props => {
  const { rating = 0, isEdit = false, onChange } = props;

  return (
    <div>
      {[...Array(5)].map((_e, i) => (
        <span key={i} style={{ cursor: isEdit ? 'pointer' : 'default' }}>
          <Icon
            Svg={Star}
            onClick={() => onChange?.(i)}
            fill={i <= rating ? 'gold' : 'gray'}
          />
        </span>
      ))}
    </div>
  );
};
