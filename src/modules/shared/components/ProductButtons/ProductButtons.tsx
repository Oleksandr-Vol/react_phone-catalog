import { Link } from 'react-router-dom';
import styles from './ProductButtons.module.scss';

export const ProductButtons = () => (
  <div className={styles.container}>
    <Link
      to="#"
      className={`${styles.add_to_cart} ${styles.add_to_cart_product_card} ${styles.add_to_cart_selected}`}
    >
      Add to cart
    </Link>

    <Link
      to="#"
      className={`${styles.add_to_favourites} ${styles.add_to_favourites_product_card} ${styles.add_to_favourites_selected}`}
    ></Link>
  </div>
);
