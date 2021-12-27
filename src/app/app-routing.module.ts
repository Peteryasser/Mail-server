import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {StatComponent} from "./stat/stat.component";
import {InboxComponent} from "./inbox/inbox.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:'inbox',component: InboxComponent , canActivate: [AuthGuard]},
  {path:'home',component: HomeComponent,canActivate: [AuthGuard]},
  {path:'stat',component: StatComponent},
  {path:'',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
