import { Component, OnInit } from '@angular/core';
import { Changepassword } from 'src/app/dto/changepassword';
import { Userinfo } from 'src/app/dto/userinfo';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  changePasswordDto = new Changepassword();
  userInfo: Userinfo = new Userinfo();
  errorMsgs = [];
  responseMsg: string;
  constructor(private storageService: StorageService, private loginService: LoginService) { }

  ngOnInit () {

    if (this.storageService.getUserInfo() != "") {
      this.userInfo = JSON.parse(this.storageService.getUserInfo());
      this.changePasswordDto.email = this.userInfo.email;
    }
  }

  changePassword () {
    this.loginService.changePassword(this.changePasswordDto, this.userInfo.token).subscribe(
      (data) => {
        this.responseMsg = data.message;
      },
      (error) => {

        error.error.messages.forEach(element => {
          this.errorMsgs.push(element);
        });
      }
    )
  }



}
