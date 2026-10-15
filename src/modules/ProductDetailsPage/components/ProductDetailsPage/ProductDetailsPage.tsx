import { Breadcrumbs } from '../../../shared/components/Breadcrumbs';
import styles from './ProductDetailsPage.module.scss';
import { BackButton } from '../../../shared/components/BackButton';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Good } from '../../../../utils/types/Good';
import {
  getAll,
  getProductById,
  getProductByOptions,
} from '../../../../utils/api';
import { ProductDetails } from '../../../../utils/types/ProductDetails';
import { Category } from '../../../../utils/types/Category';
import { Loader } from '../../../shared/components/Loader';
import { ProductInfo } from '../ProductInfo';
import { CardSlider } from '../../../HomePage/components/CardSlider';
import { getSuggestedProducts } from '../../../../utils/getSuggestedProducts';

type ProductDetailsState = ProductDetails | undefined;

type ProcessedProductIdState = string | undefined;

export const ProductDetailsPage = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [productDetails, setProductDetails] =
    useState<ProductDetailsState>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [processedProductId, setProcessedProductId] =
    useState<ProcessedProductIdState>(undefined);

  const { productId } = useParams();

  const { pathname, state } = useLocation();

  const timerLoaderByIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const timerLoaderByOptionsRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const navigate = useNavigate();

  const productFromNavigation = state?.product;

  const isWaitingForCurrentProduct = processedProductId !== productId;

  useEffect(() => {
    const loadGoods = async () => {
      const products = await getAll();

      setGoods(products);
    };

    loadGoods();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    if (productFromNavigation?.id === productId) {
      setProductDetails(productFromNavigation);
      setProcessedProductId(productId);

      timerLoaderByOptionsRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => {
        if (timerLoaderByOptionsRef.current) {
          clearTimeout(timerLoaderByOptionsRef.current);
        }
      };
    }

    const loadProductById = async () => {
      if (!productId) {
        return;
      }

      const isCategory = (value: string): value is Category =>
        ['phones', 'tablets', 'accessories'].includes(value);

      const urlPart = pathname.split('/')[1];

      if (!isCategory(urlPart)) {
        return;
      }

      const category = urlPart;

      try {
        const data = await getProductById(category, productId);

        setProductDetails(data);
      } finally {
        timerLoaderByIdRef.current = setTimeout(() => {
          setIsLoading(false);
          setProcessedProductId(productId);
        }, 500);
      }
    };

    loadProductById();

    return () => {
      if (timerLoaderByIdRef.current) {
        clearTimeout(timerLoaderByIdRef.current);
      }
    };
  }, [productId, pathname, productFromNavigation]);

  const loadProductByOptions = async (color: string, capacity: string) => {
    if (!productDetails) {
      return;
    }

    const data = await getProductByOptions(
      productDetails.category,
      productDetails.namespaceId,
      color,
      capacity,
    );

    navigate(`/${data?.category}/${data?.id}`, {
      state: { product: data },
    });
  };

  const currentProduct = goods.find(good => good.itemId === productDetails?.id);

  const suggestedProducts = getSuggestedProducts(goods, currentProduct?.id);

  return (
    <>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs productName={productDetails?.name} />
      </div>

      <div className={styles.back_button}>
        <BackButton />
      </div>

      {isLoading || isWaitingForCurrentProduct ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : productDetails ? (
        <>
          <ProductInfo
            productDetails={productDetails}
            numberId={currentProduct?.id}
            onOptionChange={loadProductByOptions}
          />

          <CardSlider title="You may also like" goods={suggestedProducts} />
        </>
      ) : (
        <div className={styles.error}>Product was not found</div>
      )}
    </>
  );
};
