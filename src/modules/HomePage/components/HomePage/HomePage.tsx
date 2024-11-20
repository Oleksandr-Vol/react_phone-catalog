import { BrandNew } from '../BrandNew';
import { Slider } from '../Slider';
import styles from './HomePage.module.scss';

export const HomePage = () => (
  <>
    <h1 className={styles.hidden_title}>Product Catalog</h1>

    <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

    <Slider />

    <BrandNew />

    <div className={styles.empty_space}></div>
  </>
);
