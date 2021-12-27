import { Data } from "./Data";

// immutable design pattern
export class Send {
  public id:number;
  public from: string;
  public to: string;
  public subject: string;
  public body: string
  // private formData: FormData

  constructor(from: string, to: string, subject: string, body: string) {
    this.from = from
    this.to = to
    this.subject = subject
    this.body = body
    // this.formData = formData
  }
  getFrom() {
    return this.from
  }
  getTo(): string {
    return this.to
  }
  getSubject(): string {
    return this.subject
  }
  getBody(): string {
    return this.body
  }
  // getAttachement(): FormData {
  //   return this.formData
  // }

}
