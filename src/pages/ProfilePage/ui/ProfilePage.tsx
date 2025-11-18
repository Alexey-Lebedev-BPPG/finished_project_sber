import cls from './ProfilePage.module.css';
import classNames from 'classnames';
import type { FC } from 'react';
import { ButtonBack } from 'features/ButtonBack';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

const ProfilePage: FC = () => {
  return (
    <>
      <ButtonBack />
      <h1 className={cls['form-title']}>Мои данные</h1>
      <form className={classNames(cls['form'], cls['form'])}>
        <div className={cls['form-row']}>
          <Input
            className={cls['input']}
            name='name'
            id='name'
            type='text'
            placeholder='Введите ваше имя'
          />
          <Input
            className={cls['input']}
            name='about'
            id='about'
            type='text'
            placeholder='Описание профессии'
          />
        </div>
        <div className={cls['form-row']}>
          <Input
            className={cls['input']}
            name='avatar'
            id='avatar'
            type='url'
            placeholder='Введите ссылку на аватарку'
          />
          <Input
            className={cls['input']}
            name='email'
            id='email'
            type='text'
            placeholder='email'
          />
        </div>
        <Button
          type='submit'
          className={classNames(
            cls['form-btn'],
            cls['secondary'],
            cls['maxContent'],
          )}
        >
          Сохранить
        </Button>
      </form>
      <h2 className={cls['form-title']}>Изменить пароль</h2>
      <form className={classNames(cls['form'], cls['form'])}>
        <div className={classNames(cls['form-row'], cls['form-row_min'])}>
          <Input
            className={cls['input']}
            name='password'
            id='password'
            type='password'
            placeholder='Пароль'
          />
        </div>
        <Button
          type='submit'
          className={classNames(
            cls['form-btn'],
            cls['secondary'],
            cls['maxContent'],
          )}
        >
          Сохранить
        </Button>
      </form>
    </>
  );
};

export default ProfilePage;
