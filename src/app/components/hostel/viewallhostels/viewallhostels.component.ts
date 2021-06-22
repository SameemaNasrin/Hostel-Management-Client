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
  constructor(public hostelService:HostelService) { }

  ngOnInit() {
  }

  viewAll(){
    console.log("inside view all");
    console.log(this.hostelService);
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
}
