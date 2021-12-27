export class Contact{
  private name:string;
  private email:string;
  constructor(name: string,email: string) {
    this.email=email
    this.name=name
  }
  getEmail(): string{
    return this.email
  }
  getName(): string{
    return this.name
  }
}
