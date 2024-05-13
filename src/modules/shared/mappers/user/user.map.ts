import { User } from "@modules/domain/user/user.entity";
import { IUser } from "@modules/domain/user/user.interface";

export class CostumerMapper{
  public static toDomain(user: User): IUser{
    return{
      id: user.id,
      name: user.name,
      CPF: user.CPF,
      address: user.address,
      userType: user.userType
    }
  }
}