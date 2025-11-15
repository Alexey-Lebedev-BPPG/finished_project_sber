import classNames from 'classnames';
import cls from './Spinner.module.css';

export const Spinner = () => {
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
