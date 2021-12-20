export class DataInSign{
  private first:string;
  private last:string;
  private email:string;
  private password:string;
  constructor(first:string,last:string,email: string,password: string) {
    this.first=first
    this.last=last
    this.email=email
    this.password=password
  }
  getFirst(): string{
    return this.first
  }
  getLast(): string{
    return this.last
  }
  getEmail(): string{
    return this.email
  }
  getPassword(): string{
    return this.password
  }
}
