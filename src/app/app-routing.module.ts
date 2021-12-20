import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {StatComponent} from "./stat/stat.component";
import {InboxComponent} from "./inbox/inbox.component";

const routes: Routes = [
  {path:'inbox',component: InboxComponent},
  {path:'home',component: HomeComponent},
  {path:'stat',component: StatComponent},
  {path:'',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
