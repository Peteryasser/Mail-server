import { Component } from '@angular/core';
import {AutoService} from "./service/auto/auto.service";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MailServer';
  constructor(public autoService: AutoService) { }

  logout() {
    this.autoService.logout();
  }

}
