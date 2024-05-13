import { DomainExpection } from "@modules/shared/exceptions/domain.exception";

class ProductExpection extends DomainExpection{
  constructor(message: string = 'Product Expection'){
    super(message);
    this.name = 'ProductExpection';
    this.message = message;
  }
}

class ProductValueException extends ProductExpection{
  constructor(message: string = 'You cannot set a value minor than 0'){
    super(message);
    this.name = 'ProductValueException';
    this.message = message;
  }
}

class ProductNameInvalid extends ProductExpection{
  constructor(message: string = 'You cannot set a name minor than 3 or more than 50 characters.'){
    super(message);
    this.name = 'ProductNameInvalid';
    this.message = message;
  }
}

class ProductQntInvalid extends ProductExpection{
  constructor(message: string = 'You cannot set quantity minor than 1'){
    super(message);
    this.name = 'ProductQntInvalid';
    this.message = message;
  }
}

export const ProductExpections = {
  ProductValueException,
  ProductNameInvalid,
  ProductQntInvalid,
}
