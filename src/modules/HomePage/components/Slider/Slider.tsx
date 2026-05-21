import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';

export const Slider = () => (
  <div className={styles.container}>
    <Link to="#" className={styles.button}>
      <div className={styles.icon_arrow}></div>
    </Link>

    <img
      src="./img/slider/mobile/iPhone-14-pro.png"
      alt="iPhone 14 Pro"
      className={styles.image}
    />

    <Link to="#" className={`${styles.button} ${styles.button_r}`}>
      <div className={`${styles.icon_arrow} ${styles.icon_arrow_r}`}></div>
    </Link>

    <div className={styles.indicators_wrapper}>
      <Link to="#" className={styles.indicator_link}>
        <div className={`${styles.indicator} ${styles.indicator_active}`}></div>
      </Link>

      <Link to="#" className={styles.indicator_link}>
        <div className={styles.indicator}></div>
      </Link>

      <Link to="#" className={styles.indicator_link}>
        <div className={styles.indicator}></div>
      </Link>
    </div>
  </div>
);
