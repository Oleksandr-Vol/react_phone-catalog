import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => (
  <div className={styles.container}>
    <Link to="#" className={styles.button_home}></Link>

    <div className={styles.icon_arrow}></div>

    <Link
      to="#"
      className={`${styles.breadcrumbs_text} ${styles.breadcrumbs_text_link}`}
    >
      Phones
    </Link>

    <div className={`${styles.icon_arrow} ${styles.disabled}`}></div>

    <div className={`${styles.breadcrumbs_text} ${styles.disabled}`}>
      Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
    </div>
  </div>
);
