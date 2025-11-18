import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import BackSvg from 'shared/assets/icons/back.svg';
import { Icon } from 'shared/ui/Icon/Icon';

export const ButtonBack: FC = () => {
  const navigate = useNavigate();

  return <Icon clickable onClick={() => navigate(-1)} Svg={BackSvg} />;
};
