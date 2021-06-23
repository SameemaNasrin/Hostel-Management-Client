import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roomdto } from 'src/app/dto/roomdto';
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
  @ViewChild("addRoomForm")
  private form: NgForm
  constructor(private roomService: RoomService) {
    this.roomDto.floor=2;
    this.roomDto.roomDesc='xyz';
    this.roomDto.roomNo='302';
    
    
  }

  ngOnInit () {
  }

  addStudent (): void {
    this.errorMsgs = []
    this.responseMsg = undefined
    this.roomService.addRoom(this.roomDto).subscribe(
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

