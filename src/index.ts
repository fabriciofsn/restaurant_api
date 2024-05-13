import { Category } from "@modules/domain/product/category.entity";
import { Product } from "@modules/domain/product/product.entity";
import { IProduct } from "@modules/domain/product/product.interface";
import { User } from "@modules/domain/user/user.entity";
import {IUser, userType} from '@modules/domain/user/user.interface';
import { CategoryMapper } from "@modules/shared/mappers/product/category.map";
import { ProductMap } from "@modules/shared/mappers/product/product.map";
import { CostumerMapper } from "@modules/shared/mappers/user/user.map";

const user: IUser = {
  name: 'Chiquinho',
  CPF: '058.456.789-66',
  address:{
    state: 'Sergipe',
    city: 'Tobias Barreto',
    neighborhood: 'Centro',
    number: '456',
    street: 'Rua A',
    postCode: '49300-000'
  },
  userType: userType.COSTUMER
}

const costumer = User.createUser(user);

// console.log(CostumerMapper.toDomain(costumer));

const category = Category.createCategory('Fast Food');
const catMap = CategoryMapper.toDomain(category);
// console.log(catMap);

const products: IProduct = {
  name: 'Hamburguer',
  category: category,
  value: 10,
  qnt: 40
}

const product = Product.createProduct(products);
// console.log(product)

console.log(ProductMap.toDomain(product));
