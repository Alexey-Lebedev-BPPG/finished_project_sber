import type { FC } from 'react';
import { ButtonBack } from 'shared/ui/ButtonBack';
import { CardList } from 'widgets/CardList';
import { WithQuery } from 'shared/lib/WithQuery/WithQuery';
import { useProducts } from 'entities/Product';

const CardListWithQuery = WithQuery(CardList);

export const FavoritesPage: FC = () => {
	const { isLoading, isError, products, error } = useProducts();

	return (
		<>
			<br />
			<ButtonBack />
			<CardListWithQuery
				title='Избранные'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
		</>
	);
};
