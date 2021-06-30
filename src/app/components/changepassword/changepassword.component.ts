import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  newPassword:string = undefined;
  confirmPassword:string = undefined;
  constructor() { }

  ngOnInit() {
  }

  changePassword(){
    if(this.newPassword != undefined && this.confirmPassword != undefined){
      if(this.newPassword == this.confirmPassword){
        console.log(this.newPassword);
      }
    }
  }

}
