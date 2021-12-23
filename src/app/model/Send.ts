import {Data} from "./Data";

export class Send{
  private user:Data;
  private to:string;
  private subject:string;
  private body:string
  private file:any;
  constructor(user :Data,to: string,subject: string,body:string,file:any) {
    this.user=user
    this.to=to
    this.subject=subject
    this.body=body
    this.file=file
  }
  getEmail(): string{
    return this.to
  }
  getSubject(): string{
    return this.subject
  }
  getBody(): string{
    return this.body
  }
  getFile(): any{
    return this.file
  }

}
