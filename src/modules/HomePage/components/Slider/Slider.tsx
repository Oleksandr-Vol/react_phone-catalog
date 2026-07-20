import { Link } from 'react-router-dom';
import styles from './Slider.module.scss';
import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

export const Slider = () => {
  const slides = [
    {
      image: './img/slider/mobile/iPhone-14-pro.png',
      alt: 'iPhone 14 Pro',
      id: 1,
    },
    {
      image: './img/banner-phones.png',
      alt: 'iPhone 15 Pro',
      id: 2,
    },
    {
      image: './img/banner-tablets.png',
      alt: 'iPhone 16 Pro',
      id: 3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev === slides.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  }, [slides.length]);

  const previousSlide = () => {
    setCurrentSlide(prev => {
      if (prev === 0) {
        return slides.length - 1;
      }

      return prev - 1;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide, nextSlide]);

  return (
    <div className={styles.container}>
      <Link to="#" className={styles.button} onClick={previousSlide}>
        <div className={styles.icon_arrow}></div>
      </Link>

      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].alt}
        className={styles.image}
      />

      <Link
        to="#"
        className={`${styles.button} ${styles.button_r}`}
        onClick={nextSlide}
      >
        <div className={`${styles.icon_arrow} ${styles.icon_arrow_r}`}></div>
      </Link>

      <div className={styles.indicators_wrapper}>
        {slides.map((slide, index) => (
          <Link
            to="#"
            className={styles.indicator_link}
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
          >
            <div
              className={classNames(styles.indicator, {
                [styles.indicator_active]: index === currentSlide,
              })}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};
