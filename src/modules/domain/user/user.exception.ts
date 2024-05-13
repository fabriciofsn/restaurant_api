import { DomainExpection } from "@modules/shared/exceptions/domain.exception";

class UserException extends DomainExpection{
  constructor(message: string = 'Product Exception'){
    super(message);
    this.name = 'ProductException';
    this.message = message;
  }
}

class UserNameInvalid extends UserException{
  constructor(message: string = 'You cannot set a name minor than 3 characters or more than 50'){
    super(message);
    this.name = 'UserNameInvalid';
    this.message = message;
  }
}

class CPFuserIvalid extends UserException{
  constructor(message: string = 'CPF invalid.'){
    super(message);
    this.name = 'CPFinvalid';
    this.message = message;
  }
}

export const UserExceptions = {
  UserNameInvalid,
  CPFuserIvalid
}
