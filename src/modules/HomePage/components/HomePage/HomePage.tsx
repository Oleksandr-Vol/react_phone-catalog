import { CardSlider } from '../CardSlider';
import { Categories } from '../Categories';
import { Slider } from '../Slider';
import styles from './HomePage.module.scss';

export const HomePage = () => (
  <>
    <h1 className={styles.hidden_title}>Product Catalog</h1>

    <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

    <div className={styles.slider}>
      <Slider />
    </div>

    <section className={styles.section}>
      <CardSlider title="Brand new models" />
    </section>

    <section className={styles.section}>
      <Categories />
    </section>

    <section className={`${styles.section} ${styles.section_bottom}`}>
      <CardSlider title="Hot prices" />
    </section>
  </>
);
