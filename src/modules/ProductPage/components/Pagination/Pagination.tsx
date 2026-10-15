import { SetURLSearchParams } from 'react-router-dom';
import styles from './Pagination.module.scss';
import classNames from 'classnames';

type Props = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  page: number;
  totalPages: number;
};

export const Pagination: React.FC<Props> = ({
  searchParams,
  setSearchParams,
  page,
  totalPages,
}) => {
  const previousPage = () => {
    const params = new URLSearchParams(searchParams);

    if (page === 2) {
      params.delete('page');
      setSearchParams(params);
    } else {
      params.set('page', String(page - 1));
      setSearchParams(params);
    }
  };

  const nextPage = () => {
    const params = new URLSearchParams(searchParams);

    params.set('page', String(page + 1));
    setSearchParams(params);
  };

  const handlePageChange = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === 1) {
      params.delete('page');
      setSearchParams(params);
    } else {
      params.set('page', String(pageNumber));
      setSearchParams(params);
    }
  };

  let paginationButtons;

  if (totalPages < 7) {
    paginationButtons = Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    );
  } else {
    if (page < 4) {
      paginationButtons = [1, 2, 3, 4, '...', totalPages];
    } else if (page > totalPages - 3) {
      paginationButtons = [
        1,
        '...',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      paginationButtons = [
        1,
        '...',
        page - 1,
        page,
        page + 1,
        '...',
        totalPages,
      ];
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button
          className={classNames(styles.button_arrow, {
            [styles.button_arrow_disabled]: page === 1,
          })}
          disabled={page === 1}
          onClick={previousPage}
        ></button>

        <div className={styles.numbers}>
          {paginationButtons.map((item, index) => (
            <button
              className={classNames(styles.button_number, {
                [styles.button_number_active]: item === page,
                [styles.button_number_ellipsis]: item === '...',
              })}
              key={index}
              onClick={() => handlePageChange(item)}
              disabled={item === '...'}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className={classNames(
            styles.button_arrow,
            styles.button_arrow_right,
            {
              [styles.button_arrow_disabled]: page === totalPages,
            },
          )}
          onClick={nextPage}
          disabled={page === totalPages}
        ></button>
      </div>
    </div>
  );
};
