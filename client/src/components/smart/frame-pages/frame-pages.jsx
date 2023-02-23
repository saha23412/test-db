import { MAIN_ROUTE, WALLET_ROUTE } from '../../../router/routes';
import AppRouter from '../../ordinary/app-router/app-router';
import VerticalMenu from '../../ordinary/vertical-menu/vertical-menu';
import style from './frame-pages.module.css';

const FramePages = ({ publickRoutes }) => {
  const menu = [
    { path: MAIN_ROUTE, text: 'Главная' },
    { path: WALLET_ROUTE, text: 'Кошелек' },
  ];
  return (
    <div className={style['frame-page']}>
      <VerticalMenu menuItems={menu} />
      <AppRouter publickRoutes={publickRoutes} />
    </div>
  );
};

export default FramePages;
