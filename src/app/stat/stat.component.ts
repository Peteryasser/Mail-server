import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AutoService } from "../service/auto/auto.service";
import { DataInSign } from "../model/DataInSign";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Data } from "../model/Data";

@Component({
  selector: 'cf-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private autoService: AutoService,
    private servise: HttpClient) { }

  isFormNCom = false;
  inCorrectMail = false;
  isNotCorrect = false;
  ngOnInit(): void {
  }
  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormNCom = true;
      this.inCorrectMail = false;
      return;
    }
    const user = new DataInSign(signInForm.value.first, signInForm.value.last, signInForm.value.email, signInForm.value.password);
    if (!this.autoService.autoSign(user)) {
      this.isFormNCom = false;
      this.inCorrectMail = true;
      this.isNotCorrect = false;
      return;
    }
    this.isFormNCom = false;
    this.inCorrectMail = false;

    console.log(user)
    this.servise.post<boolean>('http://localhost:8080/register', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      (isValed: boolean) => {
        if (!isValed) {
          this.isNotCorrect = true
        }
        else {
          this.autoService.signinCom()
        }
      })
  }
}
