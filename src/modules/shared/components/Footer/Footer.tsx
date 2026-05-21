import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.container}>
      <Link to="/" className={styles.logo_link}>
        <img src="./img/logo.png" alt="Logo" className={styles.logo} />
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <a
              href="https://github.com/Oleksandr-Vol/react_phone-catalog"
              className={styles.nav_link}
            >
              Github
            </a>
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

      <Link to="#" onClick={scrollToTop} className={styles.button_container}>
        <div className={styles.link}>Back to top</div>

        <div className={styles.button}></div>
      </Link>
    </footer>
  );
};
