import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddhostelComponent } from './components/hostel/addhostel/addhostel.component';
import { ViewallhostelsComponent } from './components/hostel/viewallhostels/viewallhostels.component';
import { HostelsComponent } from './components/hostels/hostels.component';
import { LoginComponent } from './components/login/login.component';
import { ViewallstudentComponent } from './components/student/viewallstudent/viewallstudent.component';
import { ViewallwardensComponent } from './components/warden/viewallwardens/viewallwardens.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hostels', component: HostelsComponent },
<<<<<<< HEAD
  { path: 'hostel', component: ViewallhostelsComponent,
      children:[
        {path:"addhostel", component:AddhostelComponent}
      ] }
=======
  {
    path: 'student', children: [
      { path: 'view', component: ViewallstudentComponent }
    ]
  },

  {
    path: 'warden', children: [
      { path: 'view', component:ViewallwardensComponent }
    ]
  }

>>>>>>> 83af717f20421e49318d3e847807944464a78449
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
