/* eslint-disable jsx-a11y/label-has-associated-control */
import { Breadcrumbs } from '../../../shared/components/Breadcrumbs';
import styles from './ProductDetailsPage.module.scss';
import { ProductButtons } from '../../../shared/components/ProductButtons';
import { CardSlider } from '../../../HomePage/components/CardSlider';
import { BackButton } from '../../../shared/components/BackButton';

export const ProductDetailsPage = () => (
  <>
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>

      <div className={styles.back_button}>
        <BackButton />
      </div>

      <h1 className={styles.title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className={styles.images}>
        <img
          src="/public/img/phones/apple-iphone-11-pro-max/gold/00.webp"
          alt="iphone"
          className={styles.image}
        />

        <div className={styles.preview}>
          <div
            className={`${styles.preview_image_container} ${styles.preview_image_container_active}`}
          >
            <img
              src="/public/img/phones/apple-iphone-14-pro/spaceblack/00.webp"
              alt="iphone"
              className={styles.preview_image}
            />
          </div>
          <div className={styles.preview_image_container}>
            <img
              src="/public/img/phones/apple-iphone-14-pro/spaceblack/01.webp"
              alt="iphone"
              className={styles.preview_image}
            />
          </div>
          <div className={styles.preview_image_container}>
            <img
              src="/public/img/phones/apple-iphone-14-pro/spaceblack/02.webp"
              alt="iphone"
              className={styles.preview_image}
            />
          </div>
          <div className={styles.preview_image_container}>
            <img
              src="/public/img/phones/apple-iphone-14-pro/spaceblack/03.webp"
              alt="iphone"
              className={styles.preview_image}
            />
          </div>
          <div className={styles.preview_image_container}>
            <img
              src="/public/img/phones/apple-iphone-14-pro/spaceblack/04.webp"
              alt="iphone"
              className={styles.preview_image}
            />
          </div>
        </div>
      </div>

      <div className={styles.options}>
        <div className={styles.text_container}>
          <p className={styles.small_text}>Available colors</p>

          <p className={styles.small_text}>ID: 802390</p>
        </div>

        <div className={styles.options_container}>
          <label
            className={`${styles.color_container} ${styles.color_container_selected}`}
          >
            <input
              type="radio"
              className={styles.color}
              style={{ backgroundColor: '#216cff' }}
              name="color"
              value="colorName"
              checked
            />
          </label>

          <label className={styles.color_container}>
            <input
              type="radio"
              className={styles.color}
              style={{ backgroundColor: 'green' }}
              name="color"
              value="colorName"
              checked
            />
          </label>

          <label className={styles.color_container}>
            <input
              type="radio"
              className={styles.color}
              style={{ backgroundColor: 'yellow' }}
              name="color"
              value="colorName"
              checked
            />
          </label>

          <label className={styles.color_container}>
            <input
              type="radio"
              className={styles.color}
              style={{ backgroundColor: 'gray' }}
              name="color"
              value="colorName"
              checked
            />
          </label>
        </div>

        <div className={styles.small_text}>Select capacity</div>

        <div
          className={`${styles.options_container} ${styles.options_container_bottom}`}
        >
          <label
            className={`${styles.capacity_container} ${styles.capacity_container_selected}`}
          >
            64GB
            <input
              type="radio"
              className={styles.capacity}
              name="capacity"
              value="capacityValue"
              checked
            />
          </label>

          <label className={styles.capacity_container}>
            64GB
            <input
              type="radio"
              className={styles.capacity}
              name="capacity"
              value="capacityValue"
              checked
            />
          </label>

          <label className={styles.capacity_container}>
            64GB
            <input
              type="radio"
              className={styles.capacity}
              name="capacity"
              value="capacityValue"
              checked
            />
          </label>
        </div>

        <div className={styles.price_container}>
          <p className={styles.price}>$999</p>

          <p className={styles.price_old}>$1255</p>
        </div>

        <div className={styles.product_buttons}>
          <ProductButtons />
        </div>

        <div className={`${styles.specs_container} ${styles.small_text}`}>
          <p>Screen</p>

          <p className={styles.black_color}>6.1” OLED</p>
        </div>

        <div className={`${styles.specs_container} ${styles.small_text}`}>
          <p>Resolution</p>

          <p className={styles.black_color}>128 GB</p>
        </div>

        <div className={`${styles.specs_container} ${styles.small_text}`}>
          <p>Processor</p>

          <p className={styles.black_color}>128 GB</p>
        </div>

        <div
          className={`${styles.specs_container} ${styles.small_text} ${styles.specs_container_bottom}`}
        >
          <p>RAM</p>

          <p className={styles.black_color}>6 GB</p>
        </div>
      </div>

      <section className={styles.about}>
        <h2 className={styles.title_h2}>About</h2>

        <article>
          <h3 className={styles.title_h3}>And then there was Pro</h3>

          <p>
            A transformative triple‑camera system that adds tons of capability
            without complexity. <br />
            <br />
            An unprecedented leap in battery life. mind‑blowing chip that
            machine learning and pushes the boundaries of what a can do. Welcome
            Welcome to the first iPhone powerful enough to be called called Pro.
          </p>
        </article>

        <article>
          <h3 className={styles.title_h3}>Camera</h3>

          <p>
            Meet the first triple‑camera system to combine cutting‑edge
            legendary simplicity of iPhone. Capture up to four times more scene.
            scene. Get beautiful images in drastically lower light. Shoot the
            highest‑quality video in a smartphone — then edit with the same
            photos. You’ve never shot with anything like it.
          </p>
        </article>

        <article>
          <h3 className={styles.title_h3}>
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </h3>

          <p>
            Meet the first triple‑camera system to combine cutting‑edge
            legendary simplicity of iPhone. Capture up to four times more scene.
            scene. Get beautiful images in drastically lower light. Shoot the
            highest‑quality video in a smartphone — then edit with the same
            photos. You’ve never shot with anything like it.
          </p>
        </article>
      </section>

      <section className={styles.tech_specs}>
        <h2 className={`${styles.title_h2} ${styles.title_h2_specs}`}>
          Tech specs
        </h2>

        <div className={styles.specs_container}>
          <p>Screen</p>

          <p className={styles.black_color}>128 GB</p>
        </div>

        <div className={styles.specs_container}>
          <p>Resolution</p>

          <p className={styles.black_color}>128 GB</p>
        </div>

        <div className={styles.specs_container}>
          <p>Processor</p>

          <p className={styles.black_color}>128 GB</p>
        </div>

        <div className={styles.specs_container}>
          <p>RAM</p>

          <p className={styles.black_color}>128 GB</p>
        </div>

        <div className={styles.specs_container}>
          <p>Built in memory</p>

          <p className={styles.black_color}>128 GB</p>
        </div>

        <div className={styles.specs_container}>
          <p>Camera</p>

          <p className={styles.black_color}>128 GB</p>
        </div>

        <div className={styles.specs_container}>
          <p>Zoom</p>

          <p className={styles.black_color}>128 GB</p>
        </div>

        <div
          className={`${styles.specs_container} ${styles.specs_container_bottom}`}
        >
          <p>Cell</p>

          <p className={styles.black_color}>6 GB</p>
        </div>
      </section>
    </div>

    <section className={styles.card_slider}>
      <CardSlider />
    </section>
  </>
);
