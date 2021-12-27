import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {StatComponent} from "./stat/stat.component";
import {InboxComponent} from "./inbox/inbox.component";
import {AuthGuard} from "./guards/auth.guard";
import {ContactsComponent} from "./contacts/contacts.component";
import {SentComponent} from "./sent/sent.component";
import {DraftComponent} from "./draft/draft.component";
import {TrashComponent} from "./trash/trash.component";

const routes: Routes = [
  {path:'inbox',component: InboxComponent , canActivate: [AuthGuard]},
  {path:'sent',component: SentComponent , canActivate: [AuthGuard]},
  {path:'draft',component: DraftComponent , canActivate: [AuthGuard]},
  {path:'home',component: HomeComponent,canActivate: [AuthGuard]},
  {path:'trash',component: TrashComponent,canActivate: [AuthGuard]},
  {path:'stat',component: StatComponent},
  {path:'',component: LoginComponent},
  {path:'contacts',component:ContactsComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
