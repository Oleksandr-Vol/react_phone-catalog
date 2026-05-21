import { ProductButtons } from '../ProductButtons';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

export const ProductCard = () => (
  <article className={`${styles.container} ${styles.container_catalog}`}>
    <Link to="#" className={styles.image_container}>
      <img
        src="./img/phones/apple-iphone-14/midnight/00.webp"
        alt="Apple iPhone 14 Midnight"
        className={styles.image}
      />
    </Link>

    <Link to="#" className={styles.name}>
      Apple iPhone 14 Pro 128GB Silver (MQ023)
    </Link>

    <div className={styles.price_container}>
      <p className={styles.price}>$999</p>

      <p className={styles.price_old}>$1255</p>
    </div>

    <div className={styles.specs_container}>
      <p className={styles.specs_name}>Screen</p>

      <p className={styles.specs_inf}>6.1” OLED</p>
    </div>

    <div className={styles.specs_container}>
      <p className={styles.specs_name}>Capacity</p>

      <p className={styles.specs_inf}>128 GB</p>
    </div>

    <div
      className={`${styles.specs_container} ${styles.specs_container_bottom}`}
    >
      <p className={styles.specs_name}>RAM</p>

      <p className={styles.specs_inf}>6 GB</p>
    </div>

    <ProductButtons />
  </article>
);
