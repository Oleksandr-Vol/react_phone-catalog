import { useState } from 'react';
import { ProductDetails } from '../../../../utils/types/ProductDetails';
import styles from './ProductGallery.module.scss';
import classNames from 'classnames';

type Props = {
  productDetails: ProductDetails;
};

export const ProductGallery: React.FC<Props> = ({
  productDetails: { images, name, category },
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img
          src={`/public/${images[currentImage]}`}
          alt={name}
          className={classNames(styles.image, {
            [styles.image_phones_tablets]: ['phones', 'tablets'].includes(
              category,
            ),
            [styles.image_accessories]: category === 'accessories',
          })}
        />
      </div>

      <div className={styles.preview}>
        {images.map((image, index) => (
          <button
            key={image}
            className={classNames(styles.preview_image_container, {
              [styles.preview_image_container_active]: index === currentImage,
            })}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={`/public/${image}`}
              alt={name}
              className={styles.preview_image}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
