import { Representable } from './representable';

export interface Paginatable<TEntity extends Representable> {
  getPaginated(pageNumber: number, pageSize: number): TEntity[];
  getTotalCount(): number;
}
