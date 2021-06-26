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
  responseMsg = [];
  msg = []
  errorMsgs = []
  hostels = []
  room = 0;

  noOfRooms = 1;

  @ViewChild("addRoomForm")
  private form: NgForm
  constructor(private roomService: RoomService, private hostelService: HostelService) { }

  ngOnInit () {
    this.hostelService.viewAll().subscribe(
      data => {
        this.hostels = data;

      },
      error => {
        console.log(error);

      }
    )

  }

  numToAlpha (num: number) {
    var s = '', t: number;

    while (num > 0) {
      t = (num - 1) % 26;
      s = String.fromCharCode(65 + t) + s;
      num = (num - t) / 26 | 0;
    }
    return s || undefined;
  }


  addRoom (): void {
    this.errorMsgs = []
    this.responseMsg = []
    if (this.noOfRooms < 1) {
      this.errorMsgs.push("No of rooms should be at least 1")
      return
    }
    else {
      for (this.room = 0; this.room < this.noOfRooms; this.room++) {
        let random = Math.floor(Math.random() * 100);

        this.roomDto.roomNo = this.roomDto.floor + '' + this.numToAlpha(this.room + 1) + random;
        this.roomService.addRoom(this.roomDto).subscribe(
          data => {
            this.form.reset();
            this.responseMsg.push(data.message)
          },
          error => {
            error.error.messages.forEach(element => {
              this.errorMsgs.push(element)
            });
          }
        )

      }
    }

  }

}

