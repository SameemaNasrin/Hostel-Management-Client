import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Allotmentdto } from 'src/app/dto/allotmentdto';
import { Hostel } from 'src/app/entities/hostel';
import { Room } from 'src/app/entities/room';
import { RoomService } from 'src/app/services/room.service';
import { Student } from 'src/app/entities/student';
import { StudentService } from 'src/app/services/student.service';
import { AllotmentserviceService } from 'src/app/services/allotmentservice.service';
import { HostelService } from 'src/app/services/hostel.service';
import { debug } from 'console';

@Component({
  selector: 'app-addallotment',
  templateUrl: './addallotment.component.html',
  styleUrls: ['./addallotment.component.css']
})
export class AddallotmentComponent implements OnInit {

  allotmentdto: Allotmentdto = new Allotmentdto();
  responseMsg: string;
  errorMsgs = []
  rooms: Room[] = []
  hostels: Hostel[] = []
  student: Student[] = []

  @ViewChild("addAllotmentForm")
  private form: NgForm
  constructor(private allotmentserviceService: AllotmentserviceService, private roomService: RoomService, private hostelservice: HostelService, private studentservice: StudentService) { }

  ngOnInit () {
    this.hostelservice.viewAll().subscribe(
      data => {
        this.hostels = data

      },
      error => {
        console.log(error);

      }
    )

    this.studentservice.getStudents().subscribe(
      data => {
        this.student = data

      },
      error => {
        console.log(error);

      }
    )

  }
  onHostelChange (event): void {
    let newVal = event.target.value;
    this.rooms = []
    this.roomService.getRoomsByHostelId(newVal).subscribe(
      data => {
        this.errorMsgs = []
        this.rooms = data;
        console.log(this.rooms);

      },
      error => {
        error.error.messages.forEach(element => {
          this.errorMsgs.push(element)
        });
      }
    )

  }

  addAllotment (): void {
    console.log(this.allotmentdto);
    this.errorMsgs = []
    this.responseMsg = undefined
    this.allotmentserviceService.addAllotment(this.allotmentdto).subscribe(
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
