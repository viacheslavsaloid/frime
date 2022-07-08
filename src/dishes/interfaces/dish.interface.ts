import type { ICategory } from '../../categories';

export interface IDish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ICategory;
}
