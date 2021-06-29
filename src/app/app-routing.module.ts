import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddhostelComponent } from './components/hostel/addhostel/addhostel.component';
import { ViewallhostelsComponent } from './components/hostel/viewallhostels/viewallhostels.component';
import { LoginComponent } from './components/login/login.component';
import { ViewallstudentComponent } from './components/student/viewallstudent/viewallstudent.component';
import { ViewallwardensComponent } from './components/warden/viewallwardens/viewallwardens.component';
import { AddstudentComponent } from './components/student/addstudent/addstudent.component';
import { ViewallroomsComponent } from './components/room/viewallrooms/viewallrooms.component';
import { AddroomComponent } from './components/room/addroom/addroom.component';
import { AddwardenComponent } from './components/warden/addwarden/addwarden.component';
import { AddvisitorComponent } from './components/visitor/addvisitor/addvisitor.component';
import { ViewallvisitorComponent } from './components/visitor/viewallvisitor/viewallvisitor.component';
import { ViewbyhidComponent } from './components/allotment/viewbyhid/viewbyhid.component';
import { AddallotmentComponent } from './components/allotment/addallotment/addallotment.component';
import { AdminGuard } from './guards/admin.guard';
import { GuestGuard } from './guards/guest.guard';

import { ViewComponent } from './components/feestructure/view/view.component';
import { WardenGuard } from './guards/warden.guard';
import { StudentGuard } from './guards/student.guard';
import { PayComponent } from './components/feestructure/pay/pay.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  {
    path: 'hostel', children: [
      { path: "add", component: AddhostelComponent, canActivate: [AdminGuard] },
      { path: "view", component: ViewallhostelsComponent }
    ]
  },
  {
    path: 'visitor', canActivate: [WardenGuard], children: [
      { path: "add", component: AddvisitorComponent },
      { path: "view", component: ViewallvisitorComponent }
    ]
  },
  {
    path: 'student', canActivate: [WardenGuard], children: [
      { path: 'view', component: ViewallstudentComponent },
      { path: 'add', component: AddstudentComponent },
    ]
  },

  {
    path: 'room', canActivate: [WardenGuard], children: [
      { path: 'view', component: ViewallroomsComponent },
      { path: 'add', component: AddroomComponent },
    ]
  },

  {
    path: 'warden', children: [
      { path: 'view', component: ViewallwardensComponent },
      { path: 'add', component: AddwardenComponent, canActivate: [AdminGuard] },
    ]
  },
  {
    path: 'allotment', canActivate: [WardenGuard], children: [
      { path: 'view', component: ViewbyhidComponent },
      { path: 'add', component: AddallotmentComponent },
    ]
  },
  {
    path: 'feestructure', children: [
      { path: 'view', component: ViewComponent, canActivate: [WardenGuard] },
      { path: 'pay', component: PayComponent, canActivate: [StudentGuard] },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
