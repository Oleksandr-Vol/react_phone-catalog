import { Category } from './types/Category';
import { Good } from './types/Good';

export function filterByCategory(goods: Good[], category: Category) {
  return goods.filter(good => good.category === category);
}
