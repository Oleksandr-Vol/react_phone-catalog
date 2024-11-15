import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Link to="/" className={styles.logo_link}>
      <img src="/img/logo.png" alt="Logo" className={styles.logo} />
    </Link>

    <div className={styles.menu_container}>
      <Link to="#" className={styles.icon_menu}></Link>
    </div>
  </header>
);
