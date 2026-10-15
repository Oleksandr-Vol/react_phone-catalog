import { useEffect, useMemo, useRef, useState } from 'react';
import { CardSlider } from '../CardSlider';
import { Categories } from '../Categories';
import { Slider } from '../Slider';
import styles from './HomePage.module.scss';
import { Good } from '../../../../utils/types/Good';
import { getAll } from '../../../../utils/api';

export const HomePage = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const timerLoaderRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const loadGoods = async () => {
      try {
        const products = await getAll();

        setGoods(products);
      } finally {
        timerLoaderRef.current = setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }
    };

    loadGoods();

    return () => {
      if (timerLoaderRef.current) {
        clearTimeout(timerLoaderRef.current);
      }
    };
  }, []);

  const hotGoods = useMemo(() => {
    return [...goods].sort(
      (a, b) => b.fullPrice - b.price - (a.fullPrice - a.price),
    );
  }, [goods]);

  const newGoods = useMemo(() => {
    return [...goods].sort((a, b) => b.year - a.year);
  }, [goods]);

  return (
    <>
      <h1 className={styles.hidden_title}>Product Catalog</h1>

      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

      <div className={styles.slider}>
        <Slider />
      </div>

      <div className={styles.card_slider}>
        <CardSlider
          title="Brand new models"
          goods={newGoods}
          isLoading={isLoading}
        />
      </div>

      <section className={styles.categories}>
        <Categories goods={goods} />
      </section>

      <div className={`${styles.card_slider} ${styles.card_slider_bottom}`}>
        <CardSlider title="Hot prices" goods={hotGoods} isLoading={isLoading} />
      </div>
    </>
  );
};
