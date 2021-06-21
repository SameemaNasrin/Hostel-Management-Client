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
import { ViewallstudentComponent } from './components/student/viewallstudent/viewallstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HostelsComponent,
    HomeComponent,
    ViewallwardensComponent,
    ViewallstudentComponent
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
