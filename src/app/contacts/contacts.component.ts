import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Data} from "../model/Data";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AutoService} from "../service/auto/auto.service";
import {Router} from "@angular/router";
import {Contact} from "../model/Contact";

@Component({
  selector: 'cf-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private autoService: AutoService, private servise: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  isFormNCom = false;
  inCorrectMail = false;
  new=false
  onSubmit(logInForm: NgForm) {

    if (!logInForm.valid) {
      this.isFormNCom = true;
      this.inCorrectMail = false;
      return;
    }
    const user = new Contact(logInForm.value.name, logInForm.value.inputEmail);
    if (!this.autoService.autoContact(user)) {
      this.isFormNCom = false;
      this.inCorrectMail = true;
      return;
    }
    this.isFormNCom = false;
    this.inCorrectMail = false;
    console.log("t")

    this.servise.post('http://localhost:8081/contact', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe({

      })
    this.new =false
  }
  add(){
    this.new=true
  }

}
