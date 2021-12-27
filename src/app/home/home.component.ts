import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AutoService } from "../service/auto/auto.service";
import { Send } from "../model/Send";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private autoService: AutoService,
    private http: HttpClient) { }

  isFormNCom = false;
  inCorrectMail = false;
  attachement: FormData

  ngOnInit() { }

  onFileSelect(event: any): void {
    const formData = new FormData()
    const files: File[] = event.target.files

    formData.append('files', files[0], files[0].name)

    this.attachement = formData
  }

  onSubmit(sendForm: NgForm) {
    if (!sendForm.valid) {
      this.isFormNCom = true;
      this.inCorrectMail = false;
      return
    }

    const email = new Send(this.autoService.save().getEmail(), sendForm.value.to,
      sendForm.value.subject, sendForm.value.body)

    if (!this.autoService.autoSend(email)) {
      this.isFormNCom = false;
      this.inCorrectMail = true;
      return
    }

    this.isFormNCom = false;
    this.inCorrectMail = false;

    this.http.post<any>('http://localhost:8081/send', email).subscribe(
      (res) => console.log(res)
    );

    this.http.post<any>('http://localhost:8081/upload', this.attachement).subscribe(
      (res) => console.log(res)
    );
  }
}
