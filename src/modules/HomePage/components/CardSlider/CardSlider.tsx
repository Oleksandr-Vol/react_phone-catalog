import { useRef, useState } from 'react';
import { Good } from '../../../../utils/types/Good';
import styles from './CardSlider.module.scss';
import classNames from 'classnames';
import { ProductList } from '../../../shared/components/ProductList';
import { Loader } from '../../../shared/components/Loader';

type Props = {
  title: string;
  goods: Good[];
  isLoading?: boolean;
};

export const CardSlider: React.FC<Props> = ({
  title,
  goods,
  isLoading = false,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    setIsLeftDisabled(!slider.scrollLeft);

    setIsRightDisabled(
      !(slider.scrollWidth - slider.clientWidth - slider.scrollLeft),
    );
  };

  const scroll = (direction: number) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const card = slider.firstElementChild as HTMLElement;

    const cardWidth = card.offsetWidth;
    const gap = parseFloat(getComputedStyle(slider).gap);

    const scrollAmount = cardWidth + gap;

    slider.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scroll(1);
  };

  const scrollLeft = () => {
    scroll(-1);
  };

  return (
    <section>
      <div className={styles.title_container}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.buttons_container}>
          <button
            className={classNames(styles.button, {
              [styles.button_disabled]: isLeftDisabled,
            })}
            onClick={scrollLeft}
            disabled={isLeftDisabled}
          ></button>

          <button
            className={classNames(styles.button, styles.button_right, {
              [styles.button_disabled]: isRightDisabled,
            })}
            onClick={scrollRight}
            disabled={isRightDisabled}
          ></button>
        </div>
      </div>

      <div className={styles.cards} ref={sliderRef} onScroll={handleScroll}>
        {isLoading ? <Loader /> : <ProductList goods={goods} />}
      </div>
    </section>
  );
};
