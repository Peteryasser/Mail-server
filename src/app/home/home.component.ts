import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AutoService} from "../service/auto/auto.service";
import {Send} from "../model/Send";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Data} from "../model/Data";

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private autoService:AutoService,private servise:HttpClient){ }
  isFormNCom = false;
  inCorrectMail = false;
  ngOnInit(): void {
  }
  onSubmit(sendForm: NgForm) {
    if (!sendForm.valid) {
      this.isFormNCom = true;
      this.inCorrectMail = false;
      return;
    }
    const data = new Send(this.autoService.save(),sendForm.value.to, sendForm.value.subject,sendForm.value.body,sendForm.value.attachment);
    console.log(data)
    if (!this.autoService.autoSend(data)) {
      this.isFormNCom = false;
      this.inCorrectMail = true;
      return;
    }
    this.isFormNCom = false;
    this.inCorrectMail = false;
    console.log(data)
    this.servise.post<boolean>('http://localhost:8081/send', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      (isValed: boolean) => {
      })
    alert("Done")
  }
}
