export class DomainExpection extends Error{
  constructor(message: string = 'Domain Exception') {
    super(message);
    this.name = 'DomainException';
    this.message = message;
  }
}
