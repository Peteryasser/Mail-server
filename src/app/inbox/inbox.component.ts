import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Send } from '../model/Send';

@Component({
  selector: 'cf-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  title = 'oop';
  inbox = "";
  date: Array<string> = ['Dec 12', 'Dec 11', 'Nov 20', 'Nov 15'];
  from: Array<string> = ["ibraam", "peter", "bishoy", "ahmed"];
  subject: Array<string> = ['iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', 'pppppppppppppppppppp', 'bbbbbbbbbbbbbbbbbbbbb', 'aaaaaaaaaaaaaaaaaaaaaa'];
  body: Array<string> = ['IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII', 'PPPPPPPPPPPP', 'BBBBBBBBBBB', 'AAAAAAAAAAAA'];
  deleteRow(i: number) {
    this.date.splice(i, 1)
    this.from.splice(i, 1)
    this.subject.splice(i, 1)
    this.body.splice(i, 1)
    this.addRow()
  }

  addRow() {
    for (let i = 0; i < this.from.length; i++) {
      let string = this.subject[i] + " - " + this.body[i];
      const usingSplit = string.split("");
      let num = usingSplit.length - 230
      usingSplit.splice(230, num);
      let fanal = '';
      for (let j = 0; j < usingSplit.length; j++) {
        fanal += usingSplit[j];
      }
      if (num > 0) {
        fanal += ' ...'
      }
      (<HTMLElement>document.querySelector('table')).innerHTML +=
        `<tr class="tr">
          <td> <button class="button_key" style="background-color: #98c1d9" >Delete</button> </td>
          <td>` + this.from[i] + `</td>
          <td>` + fanal + `</td>
          <td>` + this.date[i] + `</td>
      </tr>`
    }
  }

  onLoad() {
    console.log("hh")
    return this.http.post<Send>("http://localhost:8081/inbox",
      {
        observe: "body"
      }).subscribe(
        (emails) => console.log(emails)
      )
  }

}


