import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import classNames from 'classnames';

type Props = {
  productName?: string;
};

export const Breadcrumbs: React.FC<Props> = ({ productName }) => {
  const { pathname } = useLocation();

  const pathSegments = pathname.split('/').slice(1);

  const formatBreadcrumb = (item: string, index: number) => {
    if (productName && index === pathSegments.length - 1) {
      return productName;
    }

    const firstLetter = item[0].toUpperCase();
    const restLetters = item.slice(1);

    return `${firstLetter}${restLetters}`;
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.button_home}></Link>

      {pathSegments.map((item, index) => (
        <div className={styles.breadcrumb_container} key={index}>
          <div className={styles.icon_arrow}></div>

          <Link
            to={`/${item}`}
            className={classNames(styles.breadcrumb, {
              [styles.breadcrumb_current]: index === pathSegments.length - 1,
            })}
          >
            {formatBreadcrumb(item, index)}
          </Link>
        </div>
      ))}
    </div>
  );
};
