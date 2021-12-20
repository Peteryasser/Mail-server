export class DataInSign{
  private firstName:string;
  private lastName:string;
  private email:string;
  private password:string;
  constructor(first:string,last:string,email: string,password: string) {
    this.firstName=first
    this.lastName=last
    this.email=email
    this.password=password
  }
  getFirst(): string{
    return this.firstName
  }
  getLast(): string{
    return this.lastName
  }
  getEmail(): string{
    return this.email
  }
  getPassword(): string{
    return this.password
  }
}
