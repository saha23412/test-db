import Rocket from '../../../icons/rocket';
import MenuElement from '../../simple/menu-element/menu-element';
import style from './vertical-menu.module.css';

const VerticalMenu = ({ menuItems }) => {
  return (
    <nav className={style.navigation}>
      <div className={style['navigation-title']}>
        <Rocket />
        <h2>Меню</h2>
      </div>
      <ul className={style.menu}>
        {menuItems.map((item) => (
          <MenuElement key={item.path} path={item.path} text={item.text} />
        ))}
      </ul>
    </nav>
  );
};

export default VerticalMenu;
