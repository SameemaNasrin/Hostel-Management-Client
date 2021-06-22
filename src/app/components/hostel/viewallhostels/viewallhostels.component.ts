import { Component, OnInit } from '@angular/core';
import { Hostel } from 'src/app/dto/hostel';
import { HostelService } from 'src/app/services/hostel.service';

@Component({
  selector: 'app-viewallhostels',
  templateUrl: './viewallhostels.component.html',
  styleUrls: ['./viewallhostels.component.css']
})
export class ViewallhostelsComponent implements OnInit {

  hostel:Hostel;
  msg:string;
  hid:number;
  constructor(public hostelService:HostelService) { }

  ngOnInit() {
    this.hostelService.viewAll().subscribe(
      data => {
        console.log(data);
        this.hostel = data;
        this.msg = undefined;
      },

      error =>{
        console.log(error);
        this.msg = error.error.messages();
        this.hostel = undefined;

      }
    )
  }

  viewById(){
    console.log(this.hid);
    if(this.hid == undefined || this.hid == null || this.hid <= 0){
      this.msg = "Enter the Employee ID greater than 0"
      return;
    }
    this.hostelService.viewById(this.hid).subscribe(
      data =>{
        console.log(data);
        this.hostel = data;
        this.msg = undefined;
      },
      error =>{
        console.log(error);
        this.msg = error.error.msg;
        this.hostel = undefined;
      }
    )
  }
}
