import { useState, type ChangeEvent } from 'react';
import classNames from 'classnames';
import cls from './ReviewForm.module.css';
import { Rating } from 'shared/ui/Rating';

export const ReviewForm = () => {
	const [reviewText, setReviewText] = useState('');
	const [rating, setRating] = useState(0);

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setReviewText(e.target.value);
	};

	const handleClick = () => {
		console.log('Отправка: ', { reviewText, rating });
	};

	return (
		<form className={cls['form']}>
			<Rating isEdit rating={rating} onChange={setRating} />
			<textarea
				className={classNames(cls['input'], cls['textarea'])}
				name='text'
				id='text'
				placeholder='Напишите текст отзыва'
				value={reviewText}
				onChange={handleChange}></textarea>
			<button
				type='submit'
				className={classNames(cls['form-btn'], cls['pramary'])}
				onClick={handleClick}>
				Отправить отзыв
			</button>
		</form>
	);
};
