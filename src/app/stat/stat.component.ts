import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AutoService} from "../service/auto/auto.service";
import {DataInSign} from "../model/DataInSign";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'cf-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private autoService:AutoService,private servise:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm: NgForm){
    const data=new DataInSign(signInForm.value.first,signInForm.value.last,signInForm.value.email,signInForm.value.password);
    console.log(data)
    this.servise.post<boolean>('http://localhost:8080/register',data,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      (isValed: boolean) => {
      }
    )
    this.autoService.signinCom()
  }

}
