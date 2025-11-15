import { LoadMore } from 'shared/ui/LoadMore';
import { CardList } from 'widgets/CardList';
import type { FC } from 'react';
import { WithQuery } from 'shared/lib/WithQuery/WithQuery';
import { useProducts } from 'entities/Product';

const CardListWithQuery = WithQuery(CardList);

export const HomePage: FC = () => {
	const { products, isLoading, isError, error } = useProducts();

	return (
		<>
			<CardListWithQuery
				title='Лакомства'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
			<LoadMore />
		</>
	);
};
