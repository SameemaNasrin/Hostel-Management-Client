import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ViewallwardensComponent } from './components/warden/viewallwardens/viewallwardens.component';
import { ViewallhostelsComponent } from './components/hostel/viewallhostels/viewallhostels.component';
import { AddhostelComponent } from './components/hostel/addhostel/addhostel.component';
import { ViewallstudentComponent } from './components/student/viewallstudent/viewallstudent.component';

import { ViewbyhidComponent } from './components/allotment/viewbyhid/viewbyhid.component';
import { AddstudentComponent } from './components/student/addstudent/addstudent.component';
import { AddwardenComponent } from './components/warden/addwarden/addwarden.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ViewallwardensComponent,
    ViewallhostelsComponent,
    AddhostelComponent,
    ViewallstudentComponent,
    ViewbyhidComponent,
    AddstudentComponent,
    AddwardenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
