import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Visitordto } from 'src/app/dto/visitordto';
import { Hostel } from 'src/app/entities/hostel';
import { Student } from 'src/app/entities/student';
import { HostelService } from 'src/app/services/hostel.service';
import { StudentService } from 'src/app/services/student.service';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-addvisitor',
  templateUrl: './addvisitor.component.html',
  styleUrls: ['./addvisitor.component.css']
})
export class AddvisitorComponent implements OnInit {
  responseMsg: string;
  errorMsgs = []
  visitorDto: Visitordto = new Visitordto();
  students: Student[]
  hostels: Hostel[]
  @ViewChild("addVisitorForm")
  private form: NgForm
  constructor(private studentService: StudentService, private hostelService: HostelService, private visitorService: VisitorService) { }

  ngOnInit () {
    this.studentService.getStudents().subscribe(
      data => {
        this.students = data;

      },
      error => {
        console.log(error);

      }
    );
    this.hostelService.viewAll().subscribe(
      data => {
        this.hostels = data
      },
      error => {
        console.log(error);

      }
    )
  }

  addVisitor (): void {
    this.errorMsgs = []
    this.visitorService.addVisitor(this.visitorDto).subscribe(
      data => {
        this.form.reset()
        this.responseMsg = data.message

      },
      error => {
        error.error.messages.forEach(element => {
          this.errorMsgs.push(element)
        });

      }
    )
  }

}
