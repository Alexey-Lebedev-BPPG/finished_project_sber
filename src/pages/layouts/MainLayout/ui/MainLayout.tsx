import { Sort } from 'features/Sort';
import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import cls from './MainLayout.module.css';

export const MainLayout: FC = () => {
  return (
    <div className={cls['main-layout']}>
      <Header />
      <Sort />
      <Outlet />
      <Footer />
    </div>
  );
};
