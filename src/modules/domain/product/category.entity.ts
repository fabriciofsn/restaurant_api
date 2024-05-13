import { Uuid } from "@modules/shared/uuid/uuid";

export class Category extends Uuid<Category>{
  private _name: string;

  public get name(): string {
    return this._name;
  }
  private set name(name: string) {
    this._name = name;
  }

  private constructor(name: string){
    super();
    this.name = name;
  }

  public static createCategory(name: string): Category{
    return new Category(name);
  }
}