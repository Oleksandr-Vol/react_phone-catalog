import styles from './ProductPage.module.scss';
import { Breadcrumbs } from '../../../shared/components/Breadcrumbs';
import { useEffect, useMemo, useRef, useState } from 'react';
import { getAll } from '../../../../utils/api';
import { Good } from '../../../../utils/types/Good';
import { Loader } from '../../../shared/components/Loader';
import { useSearchParams } from 'react-router-dom';
import { filterByCategory } from '../../../../utils/filterByCategory';
import { ProductList } from '../../../shared/components/ProductList';
import { Controls } from '../Controls';
import { Sort } from '../../../../utils/types/Sort';
import { PerPage } from '../../../../utils/types/PerPage';
import { Pagination } from '../Pagination';
import { Category } from '../../../../utils/types/Category';

type Props = {
  category: Category;
};

const pageTitles = {
  phones: 'Mobile phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};

export const ProductPage: React.FC<Props> = ({ category }) => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const timerLoaderRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const timerScrollRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const isSort = (value: string): value is Sort => {
    return ['age', 'title', 'price'].includes(value);
  };

  const sortParam = searchParams.get('sort');

  const sort = sortParam && isSort(sortParam) ? sortParam : 'age';

  const isPerPage = (value: string): value is PerPage => {
    return ['4', '8', '16', 'all'].includes(value);
  };

  const perPageParam = searchParams.get('perPage');

  const perPage =
    perPageParam && isPerPage(perPageParam) ? perPageParam : 'all';

  const pageParam = searchParams.get('page');

  const page = pageParam ? +pageParam : 1;

  const loadGoods = async () => {
    setErrorMessage('');
    setIsLoading(true);

    try {
      const products = await getAll();

      setGoods(products);
    } catch {
      setErrorMessage('Something went wrong');
    } finally {
      timerLoaderRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 700);
    }
  };

  useEffect(() => {
    loadGoods();

    return () => {
      if (timerLoaderRef.current) {
        clearTimeout(timerLoaderRef.current);
      }
    };
  }, [category]);

  useEffect(() => {
    timerScrollRef.current = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 400);

    return () => {
      if (timerScrollRef.current) {
        clearTimeout(timerScrollRef.current);
      }
    };
  }, [page]);

  const filteredGoods = useMemo(() => {
    return filterByCategory(goods, category);
  }, [category, goods]);

  let isGoods;

  if (!isLoading) {
    isGoods = filteredGoods.length > 0;
  }

  const sortedGoods = useMemo(() => {
    return [...filteredGoods].sort((a, b) => {
      switch (sort) {
        case 'age':
          return b.year - a.year;

        case 'title':
          return a.name.localeCompare(b.name);

        case 'price':
          return a.price - b.price;
      }
    });
  }, [filteredGoods, sort]);

  const goodsQuantity = filterByCategory(goods, category).length;

  let paginatedGoods;
  let totalPages;

  function getPaginatedGoods(goodsPerPage: number, pageNumber: number) {
    let firstGoodIndex;
    const lastGoodIndex = goodsPerPage * pageNumber;
    const previousPage = pageNumber - 1;

    if (pageNumber === 1) {
      firstGoodIndex = 0;
    } else {
      firstGoodIndex = goodsPerPage * previousPage;
    }

    return sortedGoods.slice(firstGoodIndex, lastGoodIndex);
  }

  if (perPage === 'all') {
    paginatedGoods = sortedGoods;

    totalPages = 0;
  } else {
    paginatedGoods = getPaginatedGoods(+perPage, page);

    totalPages = Math.ceil(goodsQuantity / +perPage);
  }

  return (
    <div className={styles.container}>
      <Breadcrumbs />

      <h1 className={styles.title}>{pageTitles[category]}</h1>

      <p className={styles.models_quantity}>{`${goodsQuantity} models`}</p>

      <Controls
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        sort={sort}
        page={page}
        perPage={perPage}
      />

      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : errorMessage ? (
        <div className={styles.error_container}>
          <p className={styles.system_message}>{errorMessage}</p>

          <button className={styles.error_button} onClick={loadGoods}>
            Try again
          </button>
        </div>
      ) : isGoods ? (
        <div>
          <div className={styles.cards}>
            <ProductList goods={paginatedGoods} catalog />
          </div>

          {!!totalPages && (
            <Pagination
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <p
          className={styles.system_message}
        >{`There are no ${category} yet`}</p>
      )}
    </div>
  );
};
