import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Nav } from '../Nav';

export const Header = () => {
  // document.body.style.overflow = 'hidden';

  return (
    <header className={styles.container}>
      <Link to="/" className={styles.logo_link}>
        <img src="./img/logo.png" alt="Logo" className={styles.logo} />
        {/* <img src="./img/logo-modal.png" alt="Logo" className={styles.logo} /> */}
      </Link>

      <Nav />

      <Link to="#" className={styles.button_menu}>
        <div className={`${styles.icon_menu} ${styles.icon_menu_close}`}></div>
      </Link>
    </header>
  );
};
