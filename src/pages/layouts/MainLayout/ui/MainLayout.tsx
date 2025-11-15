import { type FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Sort } from 'shared/ui/Sort';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

export const MainLayout: FC = memo(() => {
	return (
		<>
			<Header />
			<Sort />
			<Outlet />
			<Footer />
		</>
	);
});
