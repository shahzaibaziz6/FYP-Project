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
import { EnterFypComponent } from './components/enter-fyp/enter-fyp.component';
import { StudentReportComponent } from './components/student-report/student-report.component';

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
    StudentReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
