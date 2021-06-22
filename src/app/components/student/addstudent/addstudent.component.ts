import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Studentdto } from 'src/app/dto/studentdto';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  studentDto: Studentdto = new Studentdto();
  responseMsg: string;
  errorMsgs = []
  @ViewChild("addStudentForm")
  private form: NgForm
  constructor(private studentService: StudentService) {
    this.studentDto.gender = "male";
  }

  ngOnInit () {
  }

  addStudent (): void {
    this.errorMsgs = []
    this.responseMsg = undefined
    this.studentService.addStudent(this.studentDto).subscribe(
      data => {
        this.form.reset()
        this.responseMsg = "Generated Student Id is: " + data.id;
      },
      error => {
        error.error.messages.forEach(e => {
          this.errorMsgs.push(e)
        });

      }
    )
  }

}
