import { Component, OnInit } from '@angular/core';
import {Send} from "../model/Send";
import {AutoService} from "../service/auto/auto.service";
import {HttpClient, HttpErrorResponse, HttpEvent, HttpEventType} from "@angular/common/http";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {Contact} from "../model/Contact";
import {Data} from "../model/Data";
import { saveAs } from "file-saver"


@Component({
  selector: 'cf-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private http: HttpClient,private modalService: NgbModal, private fb: FormBuilder,private serve:AutoService) { }
  friends:Send[]
  closeResult: String='';
  private deleteId: number | undefined;
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  ngOnInit(): void {
    this.onn()
  }
  onn() {
    this.http.get<Send[]>("http://localhost:8081/inbox").subscribe(
      response => {
        this.friends = <Send[]>response
        for (let i=0;i<this.friends.length;i++){
          this.friends[i].id=i
          this.friends[i].priority="d"
        }
      }
    );
    console.log(this.friends)
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  openDetails(targetModal: any, friend: Send) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    // @ts-ignore
    document.getElementById('fromd').setAttribute('value', friend.from);
    // @ts-ignore
    document.getElementById('subjectd').setAttribute('value', friend.subject);
    // @ts-ignore
    document.getElementById('bodyd').setAttribute('value', friend.body);
  }

  openDelete(targetModal: any, friend: Send) {
    this.deleteId = friend.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
  onDelete() {
    if (typeof this.deleteId === "number") {
      this.friends.splice(this.deleteId, 1)
    }
    for (let i=this.deleteId;i<this.friends.length;i++){
      this.friends[i].id=i
    }
  }

  onSearch(logInForm:NgForm){
    if(!logInForm.valid){
      return
    }
    console.log(logInForm.value.sorts)
    console.log(logInForm.value.search)
  }
  Priority(logInForm:NgForm) {
    if(!logInForm.valid){
      return
    }
    console.log(logInForm.value.priority)
  }
  onSort(logInForm:NgForm){
    console.log("IN")
    console.log(logInForm.value.so)
    console.log(logInForm.value.s)
  }


  onUpload(files:File[]):void{
    const formData=new FormData();
    for (const file of files){
      formData.append('files',file,file.name)}//Request param
      this.serve.upload(formData).subscribe(
        event=> {
          console.log(event),
            this.resportProgress(event)
        },
        (error: HttpErrorResponse)=>{
          console.log(error)
        }
      );
  }

  onDownload(filename:string):void{
    this.serve.download(filename).subscribe(
      event=> {
        console.log(event),
          this.resportProgress(event)
      },
      (error: HttpErrorResponse)=>{
        console.log(error)
      }
    );
  }
  private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!,
            {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
          // saveAs(new Blob([httpEvent.body!],
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
      default:
        console.log(httpEvent);
        break;

    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }
}
