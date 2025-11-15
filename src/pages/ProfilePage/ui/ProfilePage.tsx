import cls from './ProfilePage.module.css';
import classNames from 'classnames';
import type { FC } from 'react';
import { ButtonBack } from 'features/ButtonBack';

const ProfilePage: FC = () => {
  return (
    <>
      <ButtonBack />
      <h1 className={cls['form-title']}>Мои данные</h1>
      <form className={classNames(cls['form'], cls['form'])}>
        <div className={cls['form-row']}>
          <label className={cls['form-label']} htmlFor='name'>
            {''}
            <input
              className={cls['input']}
              name='name'
              id='name'
              type='text'
              placeholder='Введите ваше имя'
            />
          </label>
          <label className={cls['form-label']}>
            {''}
            <input
              className={cls['input']}
              name='about'
              id='about'
              type='text'
              placeholder='Описание профессии'
            />
          </label>
        </div>
        <div className={cls['form-row']}>
          <label className={cls['form-label']}>
            {''}
            <input
              className={cls['input']}
              name='avatar'
              id='avatar'
              type='url'
              placeholder='Введите ссылку на аватарку'
            />
          </label>
          <label className={cls['form-label']}>
            {''}
            <input
              className={cls['input']}
              name='email'
              id='email'
              type='text'
              placeholder='email'
            />
          </label>
        </div>

        <button
          type='submit'
          className={classNames(
            cls['form-btn'],
            cls['secondary'],
            cls['maxContent'],
          )}
        >
          Сохранить
        </button>
      </form>
      <h2 className={cls['form-title']}>Изменить пароль</h2>
      <form className={classNames(cls['form'], cls['form'])}>
        <div className={classNames(cls['form-row'], cls['form-row_min'])}>
          <label className={cls['form-label']}>
            {''}
            <input
              className={cls['input']}
              name='password'
              id='password'
              type='password'
              placeholder='Пароль'
            />
          </label>
        </div>
        <button
          type='submit'
          className={classNames(
            cls['form-btn'],
            cls['secondary'],
            cls['maxContent'],
          )}
        >
          Сохранить
        </button>
      </form>
    </>
  );
};

export default ProfilePage;
