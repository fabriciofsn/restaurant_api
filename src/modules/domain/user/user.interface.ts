export interface IUser{
  id?: string;
  name: string;
  CPF: string;
  address: IAddress;
  userType: userType;
}

export interface IAddress{
  state: string;
  city: string;
  postCode: string;
  street: string;
  number: string;
  neighborhood: string;
}

export enum userType{
  ADMIN = 'ADMIN',
  COSTUMER = 'COSTUMER'
}

