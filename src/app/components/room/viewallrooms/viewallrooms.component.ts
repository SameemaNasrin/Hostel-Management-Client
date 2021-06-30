import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Hostel } from 'src/app/entities/hostel';
import { Room } from 'src/app/entities/room';
import { HostelService } from 'src/app/services/hostel.service';
import { RoomService } from 'src/app/services/room.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-viewallrooms',
  templateUrl: './viewallrooms.component.html',
  styleUrls: ['./viewallrooms.component.css']
})
export class ViewallroomsComponent implements OnInit {

  modalRef: BsModalRef;

  rooms: Room[]
  hostels: Hostel[]
  searchItem: string
  showingAllRooms: boolean
  showingAvailableRooms: boolean
  hostelId: number;
  searchHostelId: number;
  errorMsgs = []
  floor: number;
  modalErrorMsgs = []
  wardenInfo: string;
  constructor(private roomService: RoomService, private hostelService: HostelService, private modalService: BsModalService, private storageService:StorageService) { }

  ngOnInit () {
    // this.wardenInfo =  JSON.parse(this.storageService.getUserInfo()).hostel.id;
    // console.log(this.wardenInfo)
    // this.searchItem = this.wardenInfo;
    // this.searchByHostelId();
    this.viewAll();

  }

  viewAll(){
    this.hostelService.viewAll().subscribe(
      data => {
        this.hostels = data;
      },
      error => {
        console.log(error);

      }
    )
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

  openModal (template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal () {
    this.modalService.hide();
  }



  searchByHostelId (): void {
    this.errorMsgs = []
    if (!/\D/.test(this.searchItem)) {
      this.roomService.getRoomsByHostelId(parseInt(this.searchItem)).subscribe(
        data => {
          this.rooms = data
        },
        error => {
          error.error.messages.forEach(element => {
            this.errorMsgs.push(element)
          });
        }
      )
    }
    else {
      this.rooms = []
      this.errorMsgs.push("ID must be digits only")
      return;
    }
  }

  searchByHostelIdAndFloor (): void {
    this.modalErrorMsgs = []
    this.roomService.getRoomsByFloorAndHostelId(this.searchHostelId, this.floor).subscribe(
      data => {
        console.log(data);
        this.rooms = data;
        this.closeModal()
      },
      error => {
        error.error.messages.forEach(element => {
          this.modalErrorMsgs.push(element)
        });

      }
    )

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

