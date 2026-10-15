import { shuffle } from './shuffle';
import { Good } from './types/Good';

export function getSuggestedProducts(
  products: Good[],
  currentProductId: number | undefined,
) {
  const newArr = products.filter(product => product.id !== currentProductId);

  const suggestedProductsCount = 10;

  const suggestedProducts = shuffle(newArr).slice(
    0,
    suggestedProductsCount + 1,
  );

  return suggestedProducts;
}
