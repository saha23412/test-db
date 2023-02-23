import Chart from '../../../icons/chart';
import User from '../../../icons/user';
import Container from '../container/container';
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style['header-container']}>
          <div className={style['header-logo']}>
            <Chart />
            <h1>Dashboard</h1>
          </div>
          <div className={style['header-profile']}>
            <p>Admin</p>
            <User />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
