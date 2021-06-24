import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HostelDto } from 'src/app/dto/hosteldto';
import { Roomdto } from 'src/app/dto/roomdto';
import { HostelService } from 'src/app/services/hostel.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {

  roomDto: Roomdto = new Roomdto();
  responseMsg: string;
  errorMsgs = []
  hostels = []
  @ViewChild("addRoomForm")
  private form: NgForm
  constructor(private roomService: RoomService, private hostelService: HostelService) { }

  ngOnInit () {
    this.hostelService.viewAll().subscribe(
      data => {
        this.hostels = data;
        console.log(this.hostels);

      },
      error => {
        console.log(error);

      }
    )

  }

  addRoom (): void {
    this.errorMsgs = []
    this.responseMsg = undefined
    this.roomService.addRoom(this.roomDto).subscribe(
      data => {
        this.form.reset()
        this.responseMsg = data.message;
      },
      error => {
        error.error.messages.forEach(element => {
          this.errorMsgs.push(element)
        });
      }
    )
  }

}

