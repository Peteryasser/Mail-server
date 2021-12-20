import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/model/Data';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  isAuto = false;
  isSignIn=false;
  signInComplete=false;
  constructor(private router: Router) { }

  auto() {
    this.router.navigate(['home']);
    this.isAuto = true;
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
