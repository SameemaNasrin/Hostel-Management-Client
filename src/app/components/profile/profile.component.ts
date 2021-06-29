import { Component, OnInit } from '@angular/core';
import { Userinfo } from 'src/app/dto/userinfo';
import { StorageService } from 'src/app/services/storage.service';
import { StudentService } from 'src/app/services/student.service';
import { WardenService } from 'src/app/services/warden.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: string = "";
  userInfo: Userinfo = new Userinfo();

  constructor(private studentService: StudentService, private wardenService: WardenService, private storageService: StorageService) { }

  ngOnInit () {
    if (this.storageService.getUserInfo() != "") {
      this.userInfo = JSON.parse(this.storageService.getUserInfo());
      this.user = JSON.parse(this.storageService.getUserInfo()).role;
    }
  }


}
