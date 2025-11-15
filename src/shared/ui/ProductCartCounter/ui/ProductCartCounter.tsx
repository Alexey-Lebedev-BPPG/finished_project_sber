import cls from './ProductCartCounter.module.css';
import classNames from 'classnames';
import { useCount } from '../hooks/useCount';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { addCartProduct } from 'entities/Cart';

type ProductCartCounterProps = {
	product: Product;
};
export const ProductCartCounter = ({ product }: ProductCartCounterProps) => {
	const { count, handleCount, handleCountMinus, handleCountPlus } = useCount();

	const dispatch = useAppDispatch();
	const addProductToCart = (product: CartProduct) =>
		dispatch(addCartProduct(product));

	return (
		<div className={classNames('product-btn-wrap')}>
			<div className={cls['button-count']}>
				<button
					className={cls['button-count-minus']}
					onClick={handleCountMinus}>
					-
				</button>
				<input
					type='number'
					className={cls['button-count-num']}
					value={count}
					onChange={handleCount}
				/>
				<button className={cls['button-count-plus']} onClick={handleCountPlus}>
					+
				</button>
			</div>
			<button
				onClick={() => addProductToCart({ ...product, count })}
				className={classNames(cls['button'], cls['button_type_primary'])}>
				В корзину
			</button>
		</div>
	);
};
