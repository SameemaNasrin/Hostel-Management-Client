import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HostelsComponent } from './components/hostels/hostels.component';
import { LoginComponent } from './components/login/login.component';
import { ViewallstudentComponent } from './components/student/viewallstudent/viewallstudent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hostels', component: HostelsComponent },
  {
    path: 'student', children: [
      { path: 'view', component: ViewallstudentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
