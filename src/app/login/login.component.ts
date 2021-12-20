import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AutoService} from "../service/auto/auto.service";
import {Data} from "../model/Data";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private autoService:AutoService,private servise:HttpClient){ }
  ngOnInit(): void {
  }
  onSubmit(logInForm: NgForm){
    console.log(logInForm.value)
    const data=new Data(logInForm.value.email,logInForm.value.password);
    this.servise.post<boolean>('http://localhost:8080/signIn',data,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      (isValed: boolean) => {
      }
    )

    this.autoService.auto()
}
  signin(){
    this.autoService.signin()
}
}
