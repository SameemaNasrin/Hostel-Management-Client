import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/entities/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-viewallstudent',
  templateUrl: './viewallstudent.component.html',
  styleUrls: ['./viewallstudent.component.css']
})
export class ViewallstudentComponent implements OnInit {
  students: Student[]
  searchItem: string;
  searchErr: string[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit () {
    this.studentService.getStudents().subscribe(
      data => {
        this.students = data;
      },
      error => {
        error.error.messages.forEach(element => {
          this.searchErr.push(element)
        });

      }
    )
  }

  searchById (): void {
    this.searchErr = [];
    if (!/\D/.test(this.searchItem)) {
      this.students = []
      this.studentService.getStudentById(parseInt(this.searchItem)).subscribe(
        data => {
          this.students.push(data);
        },
        error => {
          this.searchErr.push(error.error.messages)
        }
      )
    }
    else {
      this.students = []
      this.searchErr[0] = "ID must be digits only"
      return;
    }


  }
  searchByName (): void {
    this.searchErr = [];
    this.studentService.getStudentByName(this.searchItem).subscribe(
      data => {
        this.students = data;
      },
      error => {
        this.searchErr.push(error.error.messages)

      }
    )
  }
  searchByMobile (): void {
    this.searchErr = [];

    if (/[1-9]{1}[0-9]{9}/.test(this.searchItem)) {
      this.studentService.getStudentByMobile(this.searchItem).subscribe(
        data => {
          this.students = []
          this.students.push(data);
        },
        error => {
          this.searchErr.push(error.error.messages)

        }
      )
    }
    else {
      this.students = []
      this.searchErr[0] = "Mobile number must be 10 digits only"
      return;
    }
    console.log(`Search by phone: ${this.searchItem}`);

  }

}
