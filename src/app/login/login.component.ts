import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AutoService } from "../service/auto/auto.service";
import { Data } from "../model/Data";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private autoService: AutoService, private servise: HttpClient, private router: Router) { }
  ngOnInit(): void {
  }

  isFormNCom = false;
  inCorrectMail = false;
  isNotCorrect = false;

  onSubmit(logInForm: NgForm) {

    if (!logInForm.valid) {
      this.isFormNCom = true;
      this.inCorrectMail = false;
      return;
    }
    const user = new Data(logInForm.value.inputEmail, logInForm.value.password);
    if (!this.autoService.auto(user)) {
      this.isFormNCom = false;
      this.inCorrectMail = true;
      return;
    }
    this.isFormNCom = false;
    this.inCorrectMail = false;

    this.servise.post<boolean>('http://localhost:8080/signIn', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      (isValed: boolean) => {
        console.log(isValed)
        if (!isValed) {
          this.isNotCorrect = true
        }
        else {

          this.router.navigate(['home']);
          this.autoService.isAuto = true;
        }
      })
  }
  signin() {
    this.autoService.signin()
  }
}
