import { Link } from 'react-router-dom';
import cls from './NotFoudPage.module.css';
import type { FC } from 'react';
import { getRouteMain } from 'shared/consts/router';

const NotFoundPage: FC = () => {
  return (
    <div className={cls['not-found-page']}>
      <h1>Страница на найдена</h1>
      <Link to={getRouteMain()}>
        <button>Перейти на главную</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
