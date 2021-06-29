import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Userinfo } from './dto/userinfo';
import { LoginService } from './services/login.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hostel-management';
  errorMsgs = []
  userInfo: Userinfo;
  constructor(private storageService: StorageService, private loginService: LoginService, private router: Router) {

  }

  ngOnInit () {
    if (this.storageService.getUserInfo() != "") {
      this.userInfo = JSON.parse(this.storageService.getUserInfo());
    }
  }



  doLogOut (): void {
    let token = JSON.parse(this.storageService.getUserInfo()).token;
    this.loginService.logout(token).subscribe(
      data => {
        alert(data.message);
        this.storageService.clearUserInfo()
        window.location.reload()
      },
      error => {
        console.log(error);

      }
    )
  }

}
