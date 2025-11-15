import { Link } from 'react-router-dom';
import LogoIcon from 'shared/assets/icons/logo.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './Logo.module.css';
import { getRouteMain } from 'shared/consts/router';
import type { FC } from 'react';

export const Logo: FC = () => {
  return (
    <Link to={getRouteMain()}>
      <Icon
        Svg={LogoIcon}
        className={cls['logo-pic']}
        width={224}
        height={56}
      />
    </Link>
  );
};
