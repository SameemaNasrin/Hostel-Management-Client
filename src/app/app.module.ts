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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ViewComponent } from './components/feestructure/view/view.component';
import { PayComponent } from './components/feestructure/pay/pay.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { Credentials } from './helpers/credentials';
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
    ViewComponent,
    PayComponent,
    ProfileComponent,
    ChangepasswordComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: Credentials.apiKey,
      authDomain: Credentials.authDomain,
      projectId: Credentials.projectId,
      storageBucket: Credentials.storageBucket,
      messagingSenderId: Credentials.messagingSenderId,
      appId: Credentials.appId
    }),
    AngularFireStorageModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
