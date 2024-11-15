import styles from './Slider.module.scss';

export const Slider = () => (
  <>
    <img
      src="/img/slider/mobile/iPhone-14-pro.png"
      alt="iPhone 14 Pro"
      className={styles.image}
    />

    <div className={styles.indicators_wrapper}>
      <div className={`${styles.indicator} ${styles.indicator_active}`}></div>
      <div className={styles.indicator}></div>
      <div className={`${styles.indicator} ${styles.indicator_last}`}></div>
    </div>
  </>
);
