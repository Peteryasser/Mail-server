import { Data } from "./Data";

// immutable design pattern
export class Send {
  private from: string;
  private to: string;
  private subject: string;
  private body: string
  private multipartFiles: FormData

  constructor(from: string, to: string, subject: string, body: string, multipartFiles: FormData) {
    this.from = from
    this.to = to
    this.subject = subject
    this.body = body
    this.multipartFiles = multipartFiles
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
  getAttachement(): FormData {
    return this.multipartFiles
  }

}
