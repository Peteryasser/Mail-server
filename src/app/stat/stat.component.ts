import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AutoService} from "../service/auto/auto.service";
import {DataInSign} from "../model/DataInSign";

@Component({
  selector: 'cf-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private autoService:AutoService) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm: NgForm){
    const data=new DataInSign(signInForm.value.first,signInForm.value.last,signInForm.value.email,signInForm.value.password);
    console.log(data)
    this.autoService.signinCom()
  }

}
