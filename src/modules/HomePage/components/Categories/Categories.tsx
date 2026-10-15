import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';
import { Good } from '../../../../utils/types/Good';
import { Category } from '../../../../utils/types/Category';
import { filterByCategory } from '../../../../utils/filterByCategory';

type Props = {
  goods: Good[];
};

export const Categories: React.FC<Props> = ({ goods }) => {
  const goodsQuantity = (category: Category) =>
    filterByCategory(goods, category).length;

  return (
    <>
      <h2 className={styles.title}>Shop by category</h2>

      <div className={styles.categories_container}>
        <article className={styles.category}>
          <Link to="phones" className={styles.image_link}>
            <img
              src="./img/categories/phones.png"
              alt="phones"
              className={styles.image}
            />
          </Link>

          <Link to="phones" className={styles.category_title_link}>
            <h3 className={styles.category_title}>Mobile phones</h3>
          </Link>

          <p>{`${goodsQuantity('phones')} models`}</p>
        </article>

        <article className={styles.category}>
          <Link to="tablets" className={styles.image_link}>
            <img
              src="./img/categories/tablets.png"
              alt="tablets"
              className={styles.image}
            />
          </Link>

          <Link to="tablets" className={styles.category_title_link}>
            <h3 className={styles.category_title}>Tablets</h3>
          </Link>

          <p>{`${goodsQuantity('tablets')} models`}</p>
        </article>

        <article className={styles.category}>
          <Link to="accessories" className={styles.image_link}>
            <img
              src="./img/categories/accessories.png"
              alt="accessories"
              className={styles.image}
            />
          </Link>

          <Link to="accessories" className={styles.category_title_link}>
            <h3 className={styles.category_title}>Accessories</h3>
          </Link>
          <p>{`${goodsQuantity('accessories')} models`}</p>
        </article>
      </div>
    </>
  );
};
