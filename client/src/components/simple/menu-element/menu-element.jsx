import { Link } from 'react-router-dom';
import style from './menu-element.module.css';

const MenuElement = ({ path, text }) => {
  return (
    <li className={style['menu-element']}>
      <Link to={path}>{text}</Link>
    </li>
  );
};

export default MenuElement;
