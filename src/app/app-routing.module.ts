import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FyplistComponent} from './components/fyplist/fyplist.component';
import {LoginComponent} from './components/login/login.component';
import {RegistorComponent} from './components/registor/registor.component';
import {EnterFypComponent} from './components/Faculty/enter-fyp/enter-fyp.component';
import {StudentReportComponent} from './components/Faculty/student-report/student-report.component';
import {DashboardComponent} from './components/AdminRole/dashboard/dashboard.component';
import {AdminAddStudentComponent} from './components/AdminRole/admin-add-student/admin-add-student.component';
import {AdminSearchStudentComponent} from './components/AdminRole/admin-search-student/admin-search-student.component';
import {AdminSearchFaultyComponent} from './components/AdminRole/admin-search-faulty/admin-search-faulty.component';
import {AdminAddFaultyComponent} from './components/AdminRole/admin-add-faulty/admin-add-faulty.component';
import {FaultyDashboardComponent} from './components/Faculty/faulty-dashboard/faulty-dashboard.component';
import {FacultyFypListComponent} from './components/Faculty/faculty-fyp-list/faculty-fyp-list.component';
import {FacultyFypSelectStudentComponent} from './components/Faculty/faculty-fyp-select-student/faculty-fyp-select-student.component';
import {NavFacultyDashboardComponent} from './components/Faculty/nav-faculty-dashboard/nav-faculty-dashboard.component';
import {StudentDashboardComponent} from './components/Student/student-dashboard/student-dashboard.component';
import {StudentJoinGroupComponent} from './components/Student/student-join-group/student-join-group.component';
import {StudentNewFYPComponent} from './components/Student/student-new-fyp/student-new-fyp.component';
import {StudentFYPSelectComponent} from './components/Student/student-fypselect/student-fypselect.component';
import {StudentProfileComponent} from './components/Student/student-profile/student-profile.component';
import {AdminSearchFYPComponent} from './components/AdminRole/admin-search-fyp/admin-search-fyp.component';
import {AdminAddFYPComponent} from './components/AdminRole/admin-add-fyp/admin-add-fyp.component';
import {FacultyFypAddComponent} from './components/Faculty/faculty-fyp-add/faculty-fyp-add.component';
import {StudentNavDashboardComponent} from './components/Student/student-nav-dashboard/student-nav-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fyplist', component: FyplistComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registor', component: RegistorComponent },
  {path : 'admin-dashboard', component : DashboardComponent,
            children : [{path : 'profile', component : AdminAddStudentComponent},
            {path : 'admin-search-student', component : AdminSearchStudentComponent},
            {path : 'admin-search-faulty', component : AdminSearchFaultyComponent},
            {path : '', component : AdminSearchFaultyComponent},
            {path : 'admin-add-fyp', component : AdminAddFYPComponent},
            {path : 'admin-search-fyp', component : AdminSearchFYPComponent},
            {path : 'admin-add-faulty', component : AdminAddFaultyComponent}]},
  {path : 'faculty-Dashboard', component : FaultyDashboardComponent,
              children : [{path : 'faculty-enter-fyp', component : FacultyFypAddComponent},
              {path : 'faculty-fyplist', component : FacultyFypListComponent},
              {path : '', component : FacultyFypListComponent},
              {path : 'faculty-fyp-select-student', component : FacultyFypSelectStudentComponent},
              {path : 'faculty-dashboard-profile', component : FaultyDashboardComponent},
                {path : 'faculty-student-reports', component : StudentReportComponent}]},
  {path : 'faculty-nav-dashboard', component : NavFacultyDashboardComponent},
  {path : 'student-nav-dashboard', component : StudentNavDashboardComponent},
  {path : 'student-dashboard', component : StudentDashboardComponent,
              children : [
              {path: 'student-join-group', component: StudentJoinGroupComponent},
              {path: 's', component: StudentJoinGroupComponent},
              {path: 'student-new-fyp', component: StudentNewFYPComponent},
              {path: 'student-select-fyp', component: StudentFYPSelectComponent},
              {path: 'student-profile', component: StudentProfileComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
