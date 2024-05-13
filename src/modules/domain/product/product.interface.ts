import { Category } from "./category.entity";

export interface IProduct{
  id?: string;
  name: string,
  category: Category,
  value: number,
  qnt: number
}