import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddhostelComponent } from './components/hostel/addhostel/addhostel.component';
import { ViewallhostelsComponent } from './components/hostel/viewallhostels/viewallhostels.component';
// import { HostelsComponent } from './components/hostels/hostels.component';
import { LoginComponent } from './components/login/login.component';
import { ViewallstudentComponent } from './components/student/viewallstudent/viewallstudent.component';
import { ViewallwardensComponent } from './components/warden/viewallwardens/viewallwardens.component';
import { AddstudentComponent } from './components/student/addstudent/addstudent.component';
import { AddwardenComponent } from './components/warden/addwarden/addwarden.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'hostels', component: HostelsComponent },
  {
    path: 'hostel', children: [
      { path: "add", component: AddhostelComponent },
      { path: "view", component: ViewallhostelsComponent }
    ]
  },
  {
    path: 'student', children: [
      { path: 'view', component: ViewallstudentComponent },
      { path: 'add', component: AddstudentComponent },
    ]
  },

  {
    path: 'warden', children: [
      { path: 'view', component: ViewallwardensComponent },
      { path: 'add' , component: AddwardenComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
