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
import { ViewallroomsComponent } from './components/room/viewallrooms/viewallrooms.component';
import { AddroomComponent } from './components/room/addroom/addroom.component';
import { AddwardenComponent } from './components/warden/addwarden/addwarden.component';
import { AddvisitorComponent } from './components/visitor/addvisitor/addvisitor.component';
import { ViewallvisitorComponent } from './components/visitor/viewallvisitor/viewallvisitor.component';
import { AddallotmentComponent } from './components/allotment/addallotment/addallotment.component';

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
    AddallotmentComponent,
    AddstudentComponent,
    ViewallroomsComponent,
    AddroomComponent,
    AddwardenComponent,
    AddvisitorComponent,
    ViewallvisitorComponent,
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
