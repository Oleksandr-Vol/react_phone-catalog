/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import { ProductDetails } from '../../../../utils/types/ProductDetails';
import styles from './ProductOptions.module.scss';
import { colorMap } from './colorMap';
import { Category } from '../../../../utils/types/Category';

type Props = {
  productDetails: ProductDetails;
  onOptionChange: (color: string, capacity: string) => Promise<void>;
};

export const ProductOptions: React.FC<Props> = ({
  productDetails: {
    colorsAvailable,
    color,
    capacity,
    category,
    capacityAvailable,
  },
  onOptionChange,
}) => {
  const getSelectLabel = (productCategory: Category) => {
    switch (productCategory) {
      case 'phones':
      case 'tablets':
        return 'capacity';

      case 'accessories':
        return 'size';
    }
  };

  return (
    <>
      <div className={styles.options_container}>
        {colorsAvailable.map(item => (
          <label
            key={item}
            className={classNames(styles.color_container, {
              [styles.color_container_selected]: item === color,
            })}
          >
            <input
              type="radio"
              className={styles.color}
              style={{
                backgroundColor: colorMap[item as keyof typeof colorMap],
              }}
              name="color"
              value={item}
              checked={item === color}
              onChange={() => onOptionChange(item, capacity)}
            />
          </label>
        ))}
      </div>

      <div className={styles.small_text}>Select {getSelectLabel(category)}</div>

      <div
        className={`${styles.options_container} ${styles.options_container_bottom}`}
      >
        {capacityAvailable.map(item => (
          <label
            key={item}
            className={classNames(styles.capacity_container, {
              [styles.capacity_container_selected]: item === capacity,
            })}
          >
            {item}
            <input
              type="radio"
              className={styles.capacity}
              name="capacity"
              value={item}
              checked={item === capacity}
              onChange={() => onOptionChange(color, item)}
            />
          </label>
        ))}
      </div>
    </>
  );
};
