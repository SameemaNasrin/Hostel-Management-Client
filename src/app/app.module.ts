import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HostelsComponent } from './components/hostels/hostels.component';
import { HomeComponent } from './components/home/home.component';
import { ViewallwardensComponent } from './components/warden/viewallwardens/viewallwardens.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HostelsComponent,
    HomeComponent,
    ViewallwardensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
