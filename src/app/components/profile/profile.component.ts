import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userinfo } from 'src/app/dto/userinfo';
import { Student } from 'src/app/entities/student';
import { Warden } from 'src/app/entities/warden';
import { LoginService } from 'src/app/services/login.service';
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
  userName: string = "";
  student: Student = new Student();
  warden: Warden = new Warden();
  userInfo: Userinfo = new Userinfo();
  constructor(private studentService: StudentService, private wardenService: WardenService, private storageService: StorageService) { }

  ngOnInit () {
    if (this.storageService.getUserInfo() != "") {
      this.userInfo = JSON.parse(this.storageService.getUserInfo());
      if (this.userInfo.role == "student") {
        this.studentService.getStudentById(this.userInfo.id).subscribe(
          data => {
            this.student = data;
          }
        );

      }
      else if (this.userInfo.role == "warden") {
        this.wardenService.viewByWId(this.userInfo.id).subscribe(
          data => {
            console.log(data);

            this.warden = data;
          }
        );
      }
    }

    console.log(this.warden);


  }


}
