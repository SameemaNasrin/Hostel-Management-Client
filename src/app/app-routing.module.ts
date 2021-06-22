import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddhostelComponent } from './components/hostel/addhostel/addhostel.component';
import { ViewallhostelsComponent } from './components/hostel/viewallhostels/viewallhostels.component';
import { HostelsComponent } from './components/hostels/hostels.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hostels', component: HostelsComponent },
  { path: 'hostel', component: ViewallhostelsComponent,
      children:[
        {path:"addhostel", component:AddhostelComponent}
      ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
