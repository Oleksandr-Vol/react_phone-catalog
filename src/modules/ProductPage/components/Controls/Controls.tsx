import { SetURLSearchParams } from 'react-router-dom';
import styles from './Controls.module.scss';
import { Sort } from '../../../../utils/types/Sort';
import { PerPage } from '../../../../utils/types/PerPage';

type Props = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  sort: Sort;
  page: number;
  perPage: PerPage;
};

export const Controls: React.FC<Props> = ({
  searchParams,
  setSearchParams,
  sort,
  page,
  perPage,
}) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    const params = new URLSearchParams(searchParams);

    if (value === 'age') {
      params.delete('sort');
      setSearchParams(params);
    } else {
      params.set('sort', value);
      setSearchParams(params);
    }
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    const params = new URLSearchParams(searchParams);

    if (value === 'all') {
      params.delete('perPage');
      params.delete('page');
      setSearchParams(params);
    } else {
      params.set('perPage', value);
      setSearchParams(params);

      if (page !== 1) {
        params.set('page', '1');
        setSearchParams(params);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <label className={styles.label} htmlFor="sort">
          Sort by
        </label>

        <select
          className={`${styles.select} ${styles.control_select_sort}`}
          id="sort"
          value={sort}
          onChange={handleSortChange}
        >
          <option value="age">Newest</option>
          <option value="title">Alphabetically</option>
          <option value="price">Cheapest</option>
        </select>
      </div>

      <div>
        <label className={styles.label} htmlFor="items">
          Items on page
        </label>

        <select
          className={styles.select}
          id="items"
          onChange={handlePerPageChange}
          value={perPage}
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="all">All</option>
        </select>
      </div>
    </div>
  );
};
