import classNames from 'classnames';
import cls from './Footer.module.css';
import { Logo } from 'features/Logo';
import { Icon } from 'shared/ui/Icon/Icon';
import type { FC } from 'react';
import { firstCol, secondCol, socialCol } from '../consts/footer';

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
              {firstCol.map(({ href, className, title }) => (
                <a key={title} href={href} className={className}>
                  {title}
                </a>
              ))}
            </nav>
          </div>
          <div className={cls['footer-col']}>
            <nav className={cls['menu-bottom']}>
              {secondCol.map(({ href, className, title }) => (
                <a key={title} href={href} className={className}>
                  {title}
                </a>
              ))}
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
                {socialCol.map(({ className, href, Svg }, index) => (
                  <li key={index}>
                    <a className={className} href={href}>
                      <Icon Svg={Svg} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
