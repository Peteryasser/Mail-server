export class Contact{
  public id:number
  public name:string;
  public email:string[];
  constructor(name: string,email: string[]) {
    this.email=email
    this.name=name
  }
  getEmail(): string[]{
    return this.email
  }
  getName(): string{
    return this.name
  }
}
