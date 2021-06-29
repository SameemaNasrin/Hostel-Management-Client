import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  userName:string = "";
  student:Student;
  warden:Warden;
  constructor(public studentService: StudentService, public wardenService: WardenService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("userinfo")).role;
    this.userName = JSON.parse(localStorage.getItem("userinfo")).username;
    console.log(JSON.parse(localStorage.getItem("userinfo")))

    if(this.user == "student"){
      this.studentService.getStudentByName(this.userName).subscribe(
        data => {
          this.student = data;
        }
      );

    }

    if(this.user == "warden"){
      // this.wardenService.viewByWId
      let hostelId = JSON.parse(localStorage.getItem("userinfo")).hostel.id;
      this.wardenService.viewByHId(hostelId).subscribe(
        data => {
          this.warden = data;
          console.log(this.warden);
        }
      );

    }
  }


}
