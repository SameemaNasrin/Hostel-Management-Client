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
  hostelId: number;
  errorMsgs=[]
  floor: number;
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
    
      console.log(this.hostelId);
      if (this.hostelId == undefined || this.hostelId == null || this.hostelId < 1) {
        this.errorMsgs[0] = "Enter the Hostel ID greater than 1"
        return;
      }
      this.roomService.getRoomsByHostelId(this.hostelId).subscribe(
        data => {
          console.log(data);
          this.rooms = [];
          data.forEach(e => {
            this.rooms.push(e);
          });
            
          console.log(this.rooms);
          this.errorMsgs = undefined;
        },
        error => {
          console.log(error);
          this.errorMsgs = error.error.messages;
          console.log(this.errorMsgs);
  
        }
      )
    
  
  }

  
  searchByFloor (): void {
    console.log(this.floor);
      if (this.floor == undefined || this.floor < 0|| this.hostelId > 5) {
        this.errorMsgs[0] = "Enter the Floor  greater than 0 and less than 5"
        return;
      }
      this.roomService.getRoomsByFloor(this.floor).subscribe(
        data => {
          console.log(data);
          this.rooms = [];
          data.forEach(e => {
            this.rooms.push(e);
          });
            
          console.log(this.rooms);
          this.errorMsgs = undefined;
        },
        error => {
          console.log(error);
          this.errorMsgs = error.error.messages;
          console.log(this.errorMsgs);
  
        }
      )
    
  
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

