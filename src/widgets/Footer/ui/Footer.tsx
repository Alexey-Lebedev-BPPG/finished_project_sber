import classNames from 'classnames';
import Instagram from 'shared/assets/images/instagram.svg';
import Telegram from 'shared/assets/images/telegram.svg';
import Viber from 'shared/assets/images/viber.svg';
import Vk from 'shared/assets/images/vk.svg';
import Whatsapp from 'shared/assets/images/whatsapp.svg';
import cls from './Footer.module.css';
import { Logo } from 'features/Logo';
import { Icon } from 'shared/ui/Icon/Icon';
import { getRouteMain } from 'shared/consts/router';
import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className={cls.footer}>
      <div className='container'>
        <div className={cls['footer-wrapper']}>
          <div className={cls['footer-col']}>
            <Logo />
            <p className={cls['footer-copyright']}>
              © «Интернет-магазин DogFood.ru»
            </p>
          </div>
          <div className={cls['footer-col']}>
            <nav className={cls['menu-bottom']}>
              <a href={getRouteMain()} className={cls['menu-bottom-item']}>
                Каталог
              </a>
              <a href={getRouteMain()} className={cls['menu-bottom-item']}>
                Акции
              </a>
              <a href={getRouteMain()} className={cls['menu-bottom-item']}>
                Новости
              </a>
              <a href={getRouteMain()} className={cls['menu-bottom-item']}>
                Отзывы
              </a>
            </nav>
          </div>
          <div className={cls['footer-col']}>
            <nav className={cls['menu-bottom']}>
              <a href={getRouteMain()} className={cls['menu-bottom-item']}>
                Оплата и доставка
              </a>
              <a href={getRouteMain()} className={cls['menu-bottom-item']}>
                Часто спрашивают
              </a>
              <a href={getRouteMain()} className={cls['menu-bottom-item']}>
                Обратная связь
              </a>
              <a href={getRouteMain()} className={cls['menu-bottom-item']}>
                Контакты
              </a>
            </nav>
          </div>
          <div className={cls['footer-col']}>
            <div className={cls['contacts']}>
              <p className={cls['contacts-title']}>Мы на связи</p>
              <a
                className={classNames(
                  cls['contacts-tel'],
                  cls['contacts-link'],
                )}
                href='tel:89177172179'
              >
                8 (999) 00-00-00
              </a>
              <a
                className={classNames(
                  cls['contacts-mail'],
                  cls['contacts-link'],
                )}
                href='mailto:hordog.ru@gmail.com'
              >
                dogfood.ru@gmail.com
              </a>
              <ul className={classNames(cls['socials'])}>
                <li>
                  <a
                    className={cls['socials-link']}
                    href={`${getRouteMain()}#`}
                  >
                    <Icon Svg={Telegram} />
                  </a>
                </li>
                <li>
                  <a
                    className={cls['socials-link']}
                    href={`${getRouteMain()}#`}
                  >
                    <Icon Svg={Whatsapp} />
                  </a>
                </li>
                <li>
                  <a
                    className={cls['socials-link']}
                    href={`${getRouteMain()}#`}
                  >
                    <Icon Svg={Viber} />
                  </a>
                </li>
                <li>
                  <a
                    className={cls['socials-link']}
                    href={`${getRouteMain()}#`}
                  >
                    <Icon Svg={Instagram} />
                  </a>
                </li>
                <li>
                  <a
                    className={cls['socials-link']}
                    href={`${getRouteMain()}#`}
                  >
                    <Icon Svg={Vk} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
