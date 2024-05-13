import { Product } from "@modules/domain/product/product.entity";
import { IProduct } from "@modules/domain/product/product.interface";
import { IPVersion } from "net";
import { CategoryMapper } from "./category.map";

export class ProductMap{
  public static toDomain(product: Product){
    return{
      id: product.id,
      name: product.name,
      category: CategoryMapper.toDomain(product.category),
      value: product.value,
      qnt: product.qnt
    }
  }
}