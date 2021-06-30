import { Component, OnInit } from '@angular/core';
import { Changepassword } from 'src/app/dto/changepassword';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  passwordDto = new Changepassword();
  // newPassword:string = undefined;
  // confirmPassword:string = undefined;
  constructor() { }

  ngOnInit() {
  }

  changePassword(){
    console.log(this.passwordDto);
  }

}
