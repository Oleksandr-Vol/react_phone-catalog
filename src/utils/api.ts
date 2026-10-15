import { Category } from './types/Category';
import { Good } from './types/Good';
import { ProductDetails } from './types/ProductDetails';

export async function getAll(): Promise<Good[]> {
  const response = await fetch('./api/products.json');

  return response.json();
}

export async function getProductById(
  category: Category,
  productId: string,
): Promise<ProductDetails | undefined> {
  const response = await fetch(`./api/${category}.json`);

  const products: ProductDetails[] = await response.json();

  return products.find(product => product.id === productId);
}

export async function getProductByOptions(
  category: Category,
  namespaceId: string,
  color: string,
  capacity: string,
): Promise<ProductDetails | undefined> {
  const response = await fetch(`./api/${category}.json`);

  const products: ProductDetails[] = await response.json();

  return products.find(
    product =>
      product.namespaceId === namespaceId &&
      product.capacity === capacity &&
      product.color === color,
  );
}
