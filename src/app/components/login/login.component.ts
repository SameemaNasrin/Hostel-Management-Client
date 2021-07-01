import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logindto } from 'src/app/dto/logindto';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  errorMsgs = []
  loginDto: Logindto = new Logindto();
  constructor(private loginService: LoginService, private storageService: StorageService, private router: Router) { }

  ngOnInit () {
  }
  doLogin (): void {
    this.errorMsgs = []
    this.loginService.login(this.loginDto).subscribe(
      data => {
        this.msg = "Logged in successfully"
        //saving user information into local storage
        this.storageService.setUserInfo(JSON.stringify(data));
        console.log(this.loginDto)
        window.location.reload()
        // this.router.navigateByUrl("/");
      },
      error => {
        error.error.messages.forEach(element => {
          this.errorMsgs.push(element)
        });

      }
    )

  }

}
