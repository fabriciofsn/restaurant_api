import { Uuid } from "@modules/shared/uuid/uuid";
import { IProduct } from "./product.interface";
import { Category } from "./category.entity";
import { ProductExpections } from "./product.expection";

export class Product extends Uuid<Product> implements IProduct{
  private _name: string;
  private _category: Category;
  private _value: number;
  private _qnt: number;

  public static readonly NAME_LENGTH_MINIMUM = 3;
  public static readonly NAME_LENGTH_MAXIMUM = 50;

  public static readonly VALUE_MINIMUM_VALID = 0;

  public static readonly QNT_MINIMUM = 1;

  public get name(): string {
    return this._name;
  }
  private set name(name: string) {
    if(name.length < Product.NAME_LENGTH_MINIMUM){
      throw new ProductExpections.ProductNameInvalid();
    }
    if(name.length > Product.NAME_LENGTH_MAXIMUM){
      throw new ProductExpections.ProductNameInvalid();
    }
    this._name = name;
  }

  public get category(): Category {
    return this._category;
  }
  private set category(category: Category) {
    this._category = category;
  }

  public get value(): number {
    return this._value;
  }
  private set value(value: number) {
    if(value < 0){
      throw new ProductExpections.ProductValueException();
    }
    this._value = value;
  }

  public get qnt(): number {
    return this._qnt;
  }
  private set qnt(qnt: number) {
    if(qnt < Product.QNT_MINIMUM){
      throw new ProductExpections.ProductQntInvalid();
    }
    this._qnt = qnt;
  }

  private constructor(product: IProduct){
    super(product.id);
    this.name = product.name;
    this.category = product.category;
    this.value = product.value;
    this.qnt = product.qnt;
  }

  public static createProduct(product: IProduct): Product{
    return new Product(product);
  }
}