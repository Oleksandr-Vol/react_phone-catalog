import { Breadcrumbs } from '../../../shared/components/Breadcrumbs';
import { ProductCard } from '../../../shared/components/ProductCard';
import styles from './FavoritesPage.module.scss';

export const FavoritesPage = () => (
  <div className={styles.container}>
    <Breadcrumbs />

    <h1 className={styles.title}>Favourites</h1>

    <p className={styles.items_quantity}>5 items</p>

    <div className={styles.cards_container}>
      <ProductCard />
    </div>
  </div>
);
