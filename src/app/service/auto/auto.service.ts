import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/model/Data';
import { DataInSign } from "../../model/DataInSign";
import { Send } from "../../model/Send";
import {Contact} from "../../model/Contact";

@Injectable({
  providedIn: 'root'
})

export class AutoService {
  data!: Data
  isAuto = false;
  isSignIn = false;
  signInComplete = false;
  constructor(private router: Router) { }

  auto(data: Data): boolean {
    if (this.checkLogin(data.getEmail())) {
      this.data = data
      return true;
    }
    this.isAuto = false;
    return false;
  }


  save(): Data {
    return this.data;
  }

  autoSign(data: DataInSign) {
    if (this.checkLogin(data.getEmail())) {
      return true;
    }
    this.isAuto = false;
    return false;
  }

  autoSend(data: Send) {
    if (this.checkLogin(data.getTo())) {
      return true;
    }
    return false;
  }

  autoContact(data: string) {
      if (this.checkLogin(data)) {
        return true;
    }
    return false;
  }

  private checkLogin(login: string): boolean {
    return login.includes('@mail.com') || login.includes('@gmail.com') || login.includes('@yahoo.com');
  }

  signin() {
    this.router.navigate(['stat']);
    this.isSignIn = true;
  }
  signinCom() {
    this.router.navigate(['']);
    this.signInComplete = true;
  }


  logout() {
    this.isAuto = false;
    this.router.navigate(['']);
  }

}
