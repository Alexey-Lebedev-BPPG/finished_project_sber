import { type FC } from 'react';
import cls from './PageError.module.css';
import { Button } from 'shared/ui/Button/Button';

export const PageError: FC = () => {
  const reloadPage = () => window.location.reload();

  return (
    <div className={cls['page-error']}>
      <p>{'Произошла непредвиденная ошибка'}</p>
      <Button onClick={reloadPage}>{'Обновить страницу'}</Button>
    </div>
  );
};
