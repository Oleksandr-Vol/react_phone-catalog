import { ProductDetails } from '../../../../utils/types/ProductDetails';
import { ProductButtons } from '../../../shared/components/ProductButtons';
import styles from './ProductInfo.module.scss';
import { ProductGallery } from '../ProductGallery';
import { ProductOptions } from '../ProductOptions';

type Props = {
  productDetails: ProductDetails;
  numberId: number | undefined;
  onOptionChange: (color: string, capacity: string) => Promise<void>;
};

export const ProductInfo: React.FC<Props> = ({
  productDetails,
  numberId,
  onOptionChange,
}) => {
  const {
    category,
    name,
    priceRegular,
    priceDiscount,
    description,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = productDetails;

  return (
    <>
      <h1 className={styles.title}>{name}</h1>

      <div className={styles.wrapper}>
        <ProductGallery productDetails={productDetails} />

        <div className={styles.options}>
          <div className={styles.text_container}>
            <p className={styles.small_text}>Available colors</p>

            <p className={styles.small_text}>ID: {numberId}</p>
          </div>

          <div className={styles.options_wrapper}>
            <ProductOptions
              productDetails={productDetails}
              onOptionChange={onOptionChange}
            />

            <div className={styles.price_container}>
              <p className={styles.price}>{priceDiscount}</p>

              <p className={styles.price_old}>{priceRegular}</p>
            </div>

            <div className={styles.product_buttons}>
              <ProductButtons />
            </div>

            <div className={`${styles.specs_container} ${styles.small_text}`}>
              <p>Screen</p>

              <p className={styles.black_color}>{screen}</p>
            </div>

            <div className={`${styles.specs_container} ${styles.small_text}`}>
              <p>Resolution</p>

              <p className={styles.black_color}>{resolution}</p>
            </div>

            <div className={`${styles.specs_container} ${styles.small_text}`}>
              <p>Processor</p>

              <p className={styles.black_color}>{processor}</p>
            </div>

            <div
              className={`${styles.specs_container} ${styles.small_text} ${styles.specs_container_bottom}`}
            >
              <p>RAM</p>

              <p className={styles.black_color}>{ram}</p>
            </div>
          </div>
        </div>

        <section className={styles.about}>
          <h2 className={styles.title_h2}>About</h2>

          {description.map(item => (
            <article key={item.title}>
              <h3 className={styles.title_h3}>{item.title}</h3>

              {item.text.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </section>

        <section className={styles.tech_specs}>
          <h2 className={`${styles.title_h2} ${styles.title_h2_specs}`}>
            Tech specs
          </h2>

          <div className={styles.specs_container}>
            <p>Screen</p>

            <p className={styles.spec_value}>{screen}</p>
          </div>

          <div className={styles.specs_container}>
            <p>Resolution</p>

            <p className={styles.spec_value}>{resolution}</p>
          </div>

          <div className={styles.specs_container}>
            <p>Processor</p>

            <p className={styles.spec_value}>{processor}</p>
          </div>

          <div className={styles.specs_container}>
            <p>RAM</p>

            <p className={styles.spec_value}>{ram}</p>
          </div>

          {['phones', 'tablets'].includes(category) && (
            <>
              <div className={styles.specs_container}>
                <p>Camera</p>

                <p className={styles.spec_value}>{camera}</p>
              </div>

              <div className={styles.specs_container}>
                <p>Zoom</p>

                <p className={styles.spec_value}>{zoom}</p>
              </div>
            </>
          )}

          <div
            className={`${styles.specs_container} ${styles.specs_container_bottom}`}
          >
            <p>Cell</p>

            <p className={`${styles.spec_value} ${styles.cell}`}>
              {cell.join(', ')}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
