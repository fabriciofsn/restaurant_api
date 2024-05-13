import { Category } from "@modules/domain/product/category.entity";

export class CategoryMapper{
  public static toDomain(category: Category){
    return {
      id: category.id,
      name: category.name
    }
  }
}