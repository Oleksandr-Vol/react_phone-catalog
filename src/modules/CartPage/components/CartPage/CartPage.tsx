import { Link } from 'react-router-dom';
import { BackButton } from '../../../shared/components/BackButton';
import styles from './CartPage.module.scss';

export const CartPage = () => (
  <div className={styles.container}>
    <div className={styles.back_button}>
      <BackButton />
    </div>

    <h1 className={styles.title}>Cart</h1>

    <div className={styles.products_wrapper}>
      <article className={styles.product}>
        <div className={styles.product_container_first}>
          <Link to="#" className={styles.button_delete}></Link>

          <Link to="#" className={styles.image_link}>
            <img
              src="./img/phones/apple-iphone-14/midnight/00.webp"
              alt="Apple iPhone 14 Midnight"
              className={styles.image}
            />
          </Link>

          <Link to="#" className={styles.product_name}>
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </Link>
        </div>

        <div className={styles.product_container_second}>
          <div className={styles.quantity_container}>
            <Link
              to="#"
              className={`${styles.quantity_button} ${styles.quantity_button_disabled}`}
            >
              <div
                className={`${styles.icon_minus} ${styles.icon_minus_disabled}`}
              ></div>
            </Link>

            <p className={styles.quantity}>1</p>

            <Link to="#" className={styles.quantity_button}>
              <div className={styles.icon_plus}></div>
            </Link>
          </div>

          <p className={styles.product_price}>$999</p>
        </div>
      </article>
    </div>

    <div className={styles.checkout_container}>
      <p className={styles.total_price}>$2657</p>

      <p className={styles.checkout_text}>Total for 3 items</p>

      <Link to="#" className={styles.checkout_button}>
        Checkout
      </Link>
    </div>
  </div>
);
