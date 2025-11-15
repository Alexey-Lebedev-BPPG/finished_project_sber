import { Link } from 'react-router-dom';
import LogoIcon from '../assets/logo.svg';
import { Icon } from 'shared/ui/Icon';
import cls from './Logo.module.css';

export const Logo = () => {
  return (
    <Link to='/'>
      {/* <img className={cls['logo-pic']} src={LogoIcon} alt='Логотип компании' /> */}
      <Icon
        Svg={LogoIcon}
        className={cls['logo-pic']}
        width={224}
        height={56}
      />
    </Link>
  );
};
