import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AutoService} from "../service/auto/auto.service";
import {Send} from "../model/Send";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private autoService:AutoService,private servise:HttpClient){ }

  ngOnInit(): void {
  }
  onSubmit(logInForm: NgForm) {
    console.log(logInForm.value)
    const data = new Send(logInForm.value.to, logInForm.value.subject,logInForm.value.attachment);
    console.log(data)
    this.servise.post<boolean>('http://localhost:8080/signIn', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      (isValed: boolean) => {
      })
    alert("Done")
  }
}
