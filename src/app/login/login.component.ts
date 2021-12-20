import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AutoService} from "../service/auto/auto.service";
import {Data} from "../model/Data";

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private autoService:AutoService){ }
  ngOnInit(): void {
  }
  onSubmit(logInForm: NgForm){
    console.log(logInForm.value)
    const data=new Data(logInForm.value.email,logInForm.value.password);
    this.autoService.auto()
}
  signin(){
    this.autoService.signin()
}
}
