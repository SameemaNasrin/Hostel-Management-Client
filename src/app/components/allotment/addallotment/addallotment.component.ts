import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Allotmentdto } from 'src/app/dto/allotmentdto';
import { Hostel } from 'src/app/entities/hostel';
import { Student } from 'src/app/entities/student';
import { StudentService } from 'src/app/services/student.service';
import { AllotmentserviceService } from 'src/app/services/allotmentservice.service';
import { HostelService } from 'src/app/services/hostel.service';

@Component({
  selector: 'app-addallotment',
  templateUrl: './addallotment.component.html',
  styleUrls: ['./addallotment.component.css']
})
export class AddallotmentComponent implements OnInit {

  allotmentdto: Allotmentdto = new Allotmentdto();
  responseMsg: string;
  errorMsgs = []
  hostels: Hostel[] = []
  student: Student[] = []

  @ViewChild("addAllotmentForm")
  private form: NgForm
  constructor(private allotmentserviceService: AllotmentserviceService, private hostelservice:HostelService, private studentservice:StudentService) { }

  ngOnInit() {
    this.hostelservice.viewAll().subscribe(
      data => {
        this.hostels = data
        console.log(this.hostels);

      },
      error => {
        console.log(error);

      }
    )
    this.studentservice.getStudents().subscribe(
      data => {
        this.student = data
        console.log(this.student);

      },
      error => {
        console.log(error);

      }
    )

  }

  addAllotment (): void {
    this.errorMsgs = []
    this.responseMsg = undefined
    this.allotmentserviceService.addallotment(this.allotmentdto).subscribe(
      data => {
        this.form.reset()
        this.responseMsg = data.message;

      },
      error => {
        error.error.messages.forEach(e => {
          this.errorMsgs.push(e)
        });
      }
    )

  }

}
