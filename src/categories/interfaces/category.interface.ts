import type { IDish } from '../../dishes';

export interface ICategory {
  id: string;
  name: string;
  dishes: IDish[];
}
