import classNames from 'classnames';
import cls from './Spinner.module.css';
import type { FC } from 'react';

export const Spinner: FC = () => {
  return (
    <div className={classNames(cls['wrapper'])}>
      <div className={classNames(cls['loader'])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
