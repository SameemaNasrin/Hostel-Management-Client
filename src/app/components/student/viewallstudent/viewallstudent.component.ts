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
  constructor(private studentService: StudentService) { }

  ngOnInit () {
    this.studentService.getStudents().subscribe(
      data => {
        this.students = data;
        console.log(this.students);
      },
      error => {
        console.log(error);

      }
    )
  }

}
