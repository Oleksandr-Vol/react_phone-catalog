import { Good } from '../../../../utils/types/Good';
import { ProductCard } from '../../../shared/components/ProductCard';

type Props = {
  goods: Good[];
  catalog?: boolean;
};

export const ProductList: React.FC<Props> = ({ goods, catalog }) => (
  <>
    {goods.map(good => (
      <ProductCard key={good.id} good={good} catalog={catalog} />
    ))}
  </>
);
