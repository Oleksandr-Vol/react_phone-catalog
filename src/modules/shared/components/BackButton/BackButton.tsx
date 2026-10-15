import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={styles.container}>
      <div className={styles.arrow}></div>

      <div className={styles.text}>Back</div>
    </button>
  );
};
