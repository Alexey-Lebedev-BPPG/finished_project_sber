import Instagram from 'shared/assets/images/instagram.svg';
import Telegram from 'shared/assets/images/telegram.svg';
import Viber from 'shared/assets/images/viber.svg';
import Vk from 'shared/assets/images/vk.svg';
import Whatsapp from 'shared/assets/images/whatsapp.svg';
import cls from '../ui/Footer.module.css';
import { getRouteMain } from 'shared/consts/router';

export const firstCol = [
  {
    href: getRouteMain(),
    className: cls['menu-bottom-item'],
    title: 'Каталог',
  },
  {
    href: getRouteMain(),
    className: cls['menu-bottom-item'],
    title: 'Акции',
  },
  {
    href: getRouteMain(),
    className: cls['menu-bottom-item'],
    title: 'Новости',
  },
  {
    href: getRouteMain(),
    className: cls['menu-bottom-item'],
    title: 'Отзывы',
  },
];

export const secondCol = [
  {
    href: getRouteMain(),
    className: cls['menu-bottom-item'],
    title: 'Оплата и доставка',
  },
  {
    href: getRouteMain(),
    className: cls['menu-bottom-item'],
    title: 'Часто спрашивают',
  },
  {
    href: getRouteMain(),
    className: cls['menu-bottom-item'],
    title: 'Обратная связь',
  },
  {
    href: getRouteMain(),
    className: cls['menu-bottom-item'],
    title: 'Контакты',
  },
];

export const socialCol = [
  {
    href: getRouteMain(),
    className: cls['socials-link'],
    Svg: Telegram,
  },
  {
    href: getRouteMain(),
    className: cls['socials-link'],
    Svg: Whatsapp,
  },
  {
    href: getRouteMain(),
    className: cls['socials-link'],
    Svg: Viber,
  },
  {
    href: getRouteMain(),
    className: cls['socials-link'],
    Svg: Instagram,
  },
  {
    href: getRouteMain(),
    className: cls['socials-link'],
    Svg: Vk,
  },
];
