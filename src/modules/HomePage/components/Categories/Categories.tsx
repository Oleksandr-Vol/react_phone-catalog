import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';

export const Categories = () => (
  <>
    <h2 className={styles.title}>Shop by category</h2>

    <div className={styles.categories_container}>
      <article className={styles.category}>
        <Link to="#" className={styles.image_link}>
          <img
            src="./img/categories/phones.png"
            alt="phones"
            className={styles.image}
          />
        </Link>

        <Link to="#" className={styles.category_title_link}>
          <h3 className={styles.category_title}>Mobile phones</h3>
        </Link>

        <p>95 models</p>
      </article>

      <article className={styles.category}>
        <Link to="#" className={styles.image_link}>
          <img
            src="./img/categories/tablets.png"
            alt="tablets"
            className={styles.image}
          />
        </Link>

        <Link to="#" className={styles.category_title_link}>
          <h3 className={styles.category_title}>Tablets</h3>
        </Link>

        <p>24 models</p>
      </article>

      <article className={styles.category}>
        <Link to="#" className={styles.image_link}>
          <img
            src="./img/categories/accessories.png"
            alt="accessories"
            className={styles.image}
          />
        </Link>

        <Link to="#" className={styles.category_title_link}>
          <h3 className={styles.category_title}>Accessories</h3>
        </Link>
        <p>24 models</p>
      </article>
    </div>
  </>
);
