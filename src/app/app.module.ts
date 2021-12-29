import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { StatComponent } from './stat/stat.component';
import { HttpClientModule } from "@angular/common/http";
import { InboxComponent } from './inbox/inbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent } from './draft/draft.component';
import { TrashComponent } from './trash/trash.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StatComponent,
    InboxComponent,
    ContactsComponent,
    SentComponent,
    DraftComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
