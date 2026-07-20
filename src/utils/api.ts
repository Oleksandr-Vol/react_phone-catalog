import { Good } from './types/good';

export async function getAll(): Promise<Good[]> {
  const response = await fetch('/api/products.json');

  return response.json();
}
