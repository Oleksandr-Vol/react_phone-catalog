import styles from './BrandNew.module.scss';

export const BrandNew = () => (
  <>
    <div className={styles.title_container}>
      <h2 className={styles.title}>Brand new models</h2>

      <div className={styles.buttons_container}>
        <div className={`${styles.button} ${styles.button_disabled}`}>
          <div className={`${styles.arrow_l} ${styles.arrow_l_disabled}`}></div>
        </div>
        <div className={styles.button}>
          <div className={styles.arrow_r}></div>
        </div>
      </div>
    </div>

    <div className={styles.cards_container}>
      <div className={styles.card}>
        <img
          src="./img/phones/apple-iphone-14/midnight/00.webp"
          alt="Apple iPhone 14 Midnight"
        />
      </div>
    </div>
  </>
);
