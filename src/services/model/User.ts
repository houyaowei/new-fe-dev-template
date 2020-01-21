export interface IUser {
  id: string;
  name: string;
  roles: [];
}

export class User {
  public id: string;
  public name: string;
  constructor(_id: string, _name: string) {
    this.id = _id;
    this.name = _name;
  }
}
