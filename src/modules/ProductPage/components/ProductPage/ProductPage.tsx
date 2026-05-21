import { Link } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import { ProductCard } from '../../../shared/components/ProductCard';
import { Breadcrumbs } from '../../../shared/components/Breadcrumbs';

export const ProductPage = () => (
  <div className={styles.container}>
    <Breadcrumbs />

    <h1 className={styles.title}>Mobile phones</h1>

    <p className={styles.models_quantity}>95 models</p>

    <div className={styles.sort_container}>
      <div>
        <p className={styles.select_name}>Sort by</p>

        <select>
          <option value="newest">Newest</option>
          <option value="alphabetically">Alphabetically</option>
          <option value="cheapest">Cheapest</option>
        </select>
      </div>

      <div>
        <p className={styles.select_name}>Items on page</p>

        <select>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="all">All</option>
        </select>
      </div>
    </div>

    <div className={styles.cards}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>

    <div className={styles.pagination_container}>
      <div className={styles.pagination}>
        <Link
          to="#"
          className={`${styles.button_arrow} ${styles.button_arrow_disabled}`}
        ></Link>

        <div className={styles.pagination_numbers}>
          <Link
            to="#"
            className={`${styles.button_number} ${styles.button_number_active}`}
          >
            1
          </Link>

          <Link to="#" className={styles.button_number}>
            2
          </Link>

          <Link to="#" className={styles.button_number}>
            3
          </Link>

          <Link to="#" className={styles.button_number}>
            4
          </Link>
        </div>

        <Link
          to="#"
          className={`${styles.button_arrow} ${styles.button_arrow_right}`}
        ></Link>
      </div>
    </div>
  </div>
);
