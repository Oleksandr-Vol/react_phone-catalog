import classNames from 'classnames';
import { Good } from '../../../../utils/types/Good';
import { ProductButtons } from '../ProductButtons';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  good: Good;
  catalog?: boolean;
};

export const ProductCard: React.FC<Props> = ({
  good: {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
    itemId,
    category,
  },
  catalog,
}) => (
  <article
    className={classNames(styles.container, {
      [styles.container_catalog]: catalog,
    })}
  >
    <Link to={`/${category}/${itemId}`} className={styles.image_container}>
      <img src={image} alt={name} className={styles.image} />
    </Link>

    <Link to={`/${category}/${itemId}`} className={styles.name}>
      {name}
    </Link>

    <div className={styles.price_container}>
      <p className={styles.price}>{`$${price}`}</p>

      <p className={styles.price_old}>{`$${fullPrice}`}</p>
    </div>

    <div className={styles.specs_container}>
      <p className={styles.specs_name}>Screen</p>

      <p className={styles.specs_inf}>{screen}</p>
    </div>

    <div className={styles.specs_container}>
      <p className={styles.specs_name}>Capacity</p>

      <p className={styles.specs_inf}>{capacity}</p>
    </div>

    <div
      className={`${styles.specs_container} ${styles.specs_container_bottom}`}
    >
      <p className={styles.specs_name}>RAM</p>

      <p className={styles.specs_inf}>{ram}</p>
    </div>

    <ProductButtons />
  </article>
);
