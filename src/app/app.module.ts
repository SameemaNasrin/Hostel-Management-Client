import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HostelsComponent } from './components/hostels/hostels.component';
import { HomeComponent } from './components/home/home.component';
import { ViewallwardensComponent } from './components/warden/viewallwardens/viewallwardens.component';
<<<<<<< HEAD
import { ViewallhostelsComponent } from './components/hostel/viewallhostels/viewallhostels.component';
import { HttpClientModule } from '@angular/common/http';
import { AddhostelComponent } from './components/hostel/addhostel/addhostel.component';
=======
import { ViewallstudentComponent } from './components/student/viewallstudent/viewallstudent.component';
>>>>>>> 83af717f20421e49318d3e847807944464a78449

import { ViewbyhidComponent } from './components/allotment/viewbyhid/viewbyhid.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HostelsComponent,
    HomeComponent,
    ViewallwardensComponent,
<<<<<<< HEAD
    ViewallhostelsComponent,
    AddhostelComponent,
=======
    ViewallstudentComponent,
    ViewbyhidComponent,
>>>>>>> 83af717f20421e49318d3e847807944464a78449
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
