import { Link } from 'react-router-dom';
import cls from './NotFoudPage.module.css';
import type { FC } from 'react';
import { getRouteMain } from 'shared/consts/router';
import { Button } from 'shared/ui/Button/Button';

const NotFoundPage: FC = () => {
  return (
    <div className={cls['not-found-page']}>
      <h1>Страница на найдена</h1>
      <Link to={getRouteMain()}>
        <Button>Перейти на главную</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
