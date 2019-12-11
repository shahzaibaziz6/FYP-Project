import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegistorComponent } from './components/registor/registor.component';
import { FyplistComponent } from './components/fyplist/fyplist.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { EnterFypComponent } from './components/Faculty/enter-fyp/enter-fyp.component';
import { StudentReportComponent } from './components/Faculty/student-report/student-report.component';
import { DashboardComponent } from './components/AdminRole/dashboard/dashboard.component';
import { AdminSearchStudentComponent } from './components/AdminRole/admin-search-student/admin-search-student.component';
import { AdminAddStudentComponent } from './components/AdminRole/admin-add-student/admin-add-student.component';
import { AdminAddFaultyComponent } from './components/AdminRole/admin-add-faulty/admin-add-faulty.component';
import { AdminSearchFaultyComponent } from './components/AdminRole/admin-search-faulty/admin-search-faulty.component';
import { FaultyDashboardComponent } from './components/Faculty/faulty-dashboard/faulty-dashboard.component';
import { FaultyDashboardProfileComponent } from './components/Faculty/faulty-dashboard-profile/faulty-dashboard-profile.component';
import { NavFacultyDashboardComponent } from './components/Faculty/nav-faculty-dashboard/nav-faculty-dashboard.component';
import { FacultyFypAddComponent } from './components/Faculty/faculty-fyp-add/faculty-fyp-add.component';
import { FacultyFypListComponent } from './components/Faculty/faculty-fyp-list/faculty-fyp-list.component';
import { FacultyFypSelectStudentComponent } from './components/Faculty/faculty-fyp-select-student/faculty-fyp-select-student.component';
import { StudentDashboardComponent } from './components/Student/student-dashboard/student-dashboard.component';
import { StudentJoinGroupComponent } from './components/Student/student-join-group/student-join-group.component';
import { StudentFYPSelectComponent } from './components/Student/student-fypselect/student-fypselect.component';
import { StudentProfileComponent } from './components/Student/student-profile/student-profile.component';
import { StudentNewFYPComponent } from './components/Student/student-new-fyp/student-new-fyp.component';
import { AdminNavDashboardComponent } from './components/AdminRole/admin-nav-dashboard/admin-nav-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegistorComponent,
    FyplistComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    EnterFypComponent,
    StudentReportComponent,
    DashboardComponent,
    AdminSearchStudentComponent,
    AdminAddStudentComponent,
    AdminAddFaultyComponent,
    AdminSearchFaultyComponent,
    FaultyDashboardComponent,
    FaultyDashboardProfileComponent,
    NavFacultyDashboardComponent,
    FacultyFypAddComponent,
    FacultyFypListComponent,
    FacultyFypSelectStudentComponent,
    StudentDashboardComponent,
    StudentJoinGroupComponent,
    StudentFYPSelectComponent,
    StudentProfileComponent,
    StudentNewFYPComponent,
    AdminNavDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
