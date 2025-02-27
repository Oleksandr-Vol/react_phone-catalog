import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  // document.body.style.overflow = 'hidden';

  return (
    <header className={styles.container}>
      <div className={styles.mobile_header}>
        <Link to="/" className={styles.logo_link}>
          <img src="./img/logo.png" alt="Logo" className={styles.logo} />
          {/* <img src="./img/logo-modal.png" alt="Logo" className={styles.logo} /> */}
        </Link>

        <Link to="#" className={styles.button_menu}>
          <div
            className={`${styles.icon_menu} ${styles.icon_menu_close}`}
          ></div>
        </Link>
      </div>

      <div className={`${styles.nav_container} ${styles.nav_container_modal}`}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <Link
                className={`${styles.nav_link} ${styles.nav_link_active}`}
                to="#"
              >
                Home
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link className={styles.nav_link} to="#">
                Phones
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link className={styles.nav_link} to="#">
                Tablets
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link className={styles.nav_link} to="#">
                Accessories
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.buttons_container}>
          <Link
            to="favorites"
            className={`${styles.button} ${styles.button_left} ${styles.button_active}`}
          >
            <div className={styles.icon_container}>
              <div className={styles.icon_favourites}></div>

              <div className={styles.quantity}>12</div>
            </div>
          </Link>

          <Link to="cart" className={styles.button}>
            <div className={styles.icon_container}>
              <div className={styles.icon_cart}></div>

              <div className={styles.quantity}>12</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
