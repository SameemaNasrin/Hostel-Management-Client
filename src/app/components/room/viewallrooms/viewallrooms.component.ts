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
  searchItem: string
  showingAllRooms: boolean
  showingAvailableRooms: boolean
  constructor(private roomService: RoomService) { }

  ngOnInit () {
    this.roomService.getAllRooms().subscribe(
      data => {
        this.showingAllRooms = true
        this.showingAvailableRooms = false
        this.rooms = data;

      },
      error => {
        console.log(error);

      }
    )
  }

  searchByHostelId (): void {

  }
  searchByFloor (): void {

  }
  searchByHostelIdAndFloor (): void {

  }
  viewAvailableRooms (): void {
    this.roomService.getAvailableRooms().subscribe(
      data => {
        this.showingAllRooms = false
        this.showingAvailableRooms = true
        this.rooms = data
      },
      error => {
        console.log(error);

      }
    )
  }

}

