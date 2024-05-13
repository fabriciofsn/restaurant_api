import {randomUUID} from 'crypto';

export class Uuid<T>{
  private _id: string;
  
  public get id(): string {
    return this._id;
  }
  private set id(uuid: string) {
    const uuidRegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if(!uuidRegExp.test(uuid)){
      throw new Error();
    }
    this._id = uuid;
  }
  
  constructor(uuid?: string){
    this.id = uuid ? uuid : randomUUID();
  }

}