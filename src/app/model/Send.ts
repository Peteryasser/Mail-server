import { Data } from "./Data";

// immutable design pattern
export class Send {
  private from: string;
  private to: string;
  private subject: string;
  private body: string
  private attachmentPath: String
  // private formData: FormDatan


  constructor(from: string, to: string, subject: string, body: string, attachmentPath: String) {
    this.from = from
    this.to = to
    this.subject = subject
    this.body = body
    this.attachmentPath = attachmentPath
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
