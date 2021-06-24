import { Component, OnInit } from '@angular/core';
import { HostelDto } from 'src/app/dto/hosteldto';
import { HostelService } from 'src/app/services/hostel.service';

@Component({
  selector: 'app-viewallhostels',
  templateUrl: './viewallhostels.component.html',
  styleUrls: ['./viewallhostels.component.css']
})
export class ViewallhostelsComponent implements OnInit {

  hostels: HostelDto[];
  errorMsgs = []
  hid: number;
  constructor(public hostelService: HostelService) { }

  ngOnInit () {
    this.hostelService.viewAll().subscribe(
      data => {
        this.errorMsgs = undefined;
        this.hostels = data

      },

      error => {
        console.log(error);
        this.errorMsgs = error.error.messages;
        this.hostels = undefined;

      }
    )
  }

  viewAll(){
    this.hostelService.viewAll().subscribe(
      data => {
        this.errorMsgs = undefined;
        this.hostels = data

      },

      error => {
        console.log(error);
        this.errorMsgs = error.error.messages;
        this.hostels = undefined;

      }
    )
  }

  viewById () {
    console.log(this.hid);
    if (this.hid == undefined || this.hid == null || this.hid <= 0) {
      this.errorMsgs[0] = "Enter the Hostel ID greater than 0"
      return;
    }
    this.hostelService.viewById(this.hid).subscribe(
      data => {
        console.log(data);
        this.hostels = [];
        this.hostels.push(data);
        this.errorMsgs = undefined;
      },
      error => {
        console.log(error);
        this.errorMsgs = error.error.messages;
        console.log(this.errorMsgs);

      }
    )
  }
}
