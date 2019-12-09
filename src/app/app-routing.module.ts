import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FyplistComponent} from './components/fyplist/fyplist.component';
import {LoginComponent} from './components/login/login.component';
import {RegistorComponent} from './components/registor/registor.component';
import {EnterFypComponent} from './components/enter-fyp/enter-fyp.component';
import {StudentReportComponent} from './components/student-report/student-report.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fyplist', component: FyplistComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registor', component: RegistorComponent },
  {path: 'fyplist/enterfyp', component: EnterFypComponent},
  {path: 'report', component: StudentReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
