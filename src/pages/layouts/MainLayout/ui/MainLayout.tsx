import { Sort } from 'entities/Product';
import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Sort />
      <Outlet />
      <Footer />
    </>
  );
};
