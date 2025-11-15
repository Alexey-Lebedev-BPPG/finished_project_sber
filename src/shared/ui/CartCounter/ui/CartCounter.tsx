import { useCount } from '../hooks/useCount';
import cls from './CartCounter.module.css';
import classNames from 'classnames';

type TCartCounter = {
	productId: string;
};
export const CartCounter = ({ productId }: TCartCounter) => {
	const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
		useCount(productId);

	return (
		<>
			<div className={classNames(cls['button-count'])}>
				<button
					onClick={handleDecrement}
					className={classNames(cls['button-count-minus'])}>
					-
				</button>
				<input
					onChange={handleSetCount}
					type='number'
					className={classNames(cls['button-count-num'])}
					value={count}
				/>
				<button
					onClick={handleIncrement}
					className={classNames(cls['button-count-plus'])}
					disabled={count >= stock}>
					+
				</button>
			</div>
		</>
	);
};
