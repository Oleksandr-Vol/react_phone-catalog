import { ProductCard } from '../../../shared/components/ProductCard';
import styles from './CardSlider.module.scss';
import { Link } from 'react-router-dom';

export const CardSlider = () => (
  <>
    <div className={styles.title_container}>
      <h2 className={styles.title}>Brand new models</h2>

      <div className={styles.buttons_container}>
        <Link
          to="#"
          className={`${styles.button_arrow} ${styles.button_arrow_disabled}`}
        ></Link>

        <Link
          to="#"
          className={`${styles.button_arrow} ${styles.button_arrow_right}`}
        ></Link>
      </div>
    </div>

    <div className={styles.cards_container}>
      <ProductCard />
    </div>
  </>
);
