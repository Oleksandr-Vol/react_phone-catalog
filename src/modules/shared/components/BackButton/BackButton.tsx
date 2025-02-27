import { Link } from 'react-router-dom';
import styles from './BackButton.module.scss';

export const BackButton = () => (
  <Link to="#" className={styles.container}>
    <div className={styles.arrow}></div>

    <div className={styles.text}>Back</div>
  </Link>
);
