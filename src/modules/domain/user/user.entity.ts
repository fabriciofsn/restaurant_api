import { Uuid } from "@modules/shared/uuid/uuid";
import { IAddress, IUser, userType } from "./user.interface";
import { UserExceptions } from "./user.exception";

export class User extends Uuid<User> implements IUser{
  private _name: string;
  private _CPF: string;
  private _address: IAddress;
  private _userType: userType;

  public static readonly MINIMUM_LENGTH_NAME = 3;
  public static readonly MAXIMUM_LENGTH_NAME = 50;

  public get name(): string {
    return this._name;
  }
  private set name(name: string) {
    if(name.length < User.MINIMUM_LENGTH_NAME){
      throw new UserExceptions.UserNameInvalid();
    }
    if(name.length > User.MAXIMUM_LENGTH_NAME){
      throw new UserExceptions.UserNameInvalid();
    }
    this._name = name;
  }

  public get CPF(): string {
    return this._CPF;
  }
  private set CPF(CPF: string) {
    const regexp: RegExp = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    if(!regexp.test(CPF)){
      throw new UserExceptions.CPFuserIvalid();
    }
    this._CPF = CPF;
  }

  public get address(): IAddress {
    return this._address;
  }
  private set address(address: IAddress) {
    this._address = address;
  }

  public get userType(): userType {
    return this._userType;
  }
  private set userType(userType: userType) {
    this._userType = userType;
  }

  private constructor(user: IUser){
    super(user.id);
    this.name = user.name;
    this.CPF = user.CPF;
    this.address = user.address;
    this.userType = user.userType;
  }

  public static createUser(user: IUser): User{
    return new User(user);
  }
}
