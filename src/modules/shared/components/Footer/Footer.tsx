import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className={styles.container}>
    <Link to="/" className={styles.logo_link}>
      <img src="./img/logo.png" alt="Logo" className={styles.logo} />
    </Link>

    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link className={styles.nav_link} to="#">
            Github
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link className={styles.nav_link} to="#">
            Contacts
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link className={styles.nav_link} to="#">
            Rights
          </Link>
        </li>
      </ul>
    </nav>

    <div className={styles.button_container}>
      <Link to="#" className={styles.link}>
        Back to top
      </Link>

      <Link to="#" className={styles.button}></Link>
    </div>
  </footer>
);
