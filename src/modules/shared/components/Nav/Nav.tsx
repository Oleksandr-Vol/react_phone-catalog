import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

export const Nav = () => (
  <div className={`${styles.container} ${styles.container_modal}`}>
    <nav className={styles.list_container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={`${styles.link} ${styles.link_active}`} to="#">
            Home
          </Link>
        </li>

        <li className={styles.item}>
          <Link className={styles.link} to="#">
            Phones
          </Link>
        </li>

        <li className={styles.item}>
          <Link className={styles.link} to="#">
            Tablets
          </Link>
        </li>

        <li className={styles.item}>
          <Link className={styles.link} to="#">
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
);
