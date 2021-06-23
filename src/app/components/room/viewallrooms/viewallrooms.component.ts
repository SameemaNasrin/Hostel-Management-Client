import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/entities/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-viewallrooms',
  templateUrl: './viewallrooms.component.html',
  styleUrls: ['./viewallrooms.component.css']
})
export class ViewallroomsComponent implements OnInit {

  rooms: Room[]
  constructor(private roomService: RoomService) { }

  ngOnInit () {
    this.roomService.getRooms().subscribe(
      data => {
        this.rooms = data;
        console.log(this.rooms);
      },
      error => {
        console.log(error);

      }
    )
  }

}

