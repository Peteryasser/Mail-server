import { Component, OnInit } from '@angular/core';
import {Send} from "../model/Send";
import {AutoService} from "../service/auto/auto.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'cf-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private http: HttpClient) { }
  friends:Send[]
  ngOnInit(): void {
    this.onn()
  }

  onn(){
    this.http.get<Send[]>("http://localhost:8081/inbox").subscribe(
      response =>{
        this.friends=<Send[]>response
        console.log(this.friends)
      }
    );
  }
}
