import { CardSlider } from '../CardSlider';
import { Categories } from '../Categories';
import { Slider } from '../Slider';
import styles from './HomePage.module.scss';

export const HomePage = () => (
  <>
    <h1 className={styles.hidden_title}>Product Catalog</h1>

    <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

    <Slider />

    <section className={styles.section}>
      <CardSlider />
    </section>

    <section className={`${styles.section} ${styles.section_categories}`}>
      <Categories />
    </section>

    <section>
      <CardSlider />
    </section>
  </>
);
