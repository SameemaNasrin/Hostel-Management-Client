import { Component, OnInit } from '@angular/core';
import { Hostel } from 'src/app/dto/hostel';
import { HostelService } from 'src/app/services/hostel.service';

@Component({
  selector: 'app-addhostel',
  templateUrl: './addhostel.component.html',
  styleUrls: ['./addhostel.component.css']
})
export class AddhostelComponent implements OnInit {

  hostel:Hostel = new Hostel();
  constructor(public hostelService:HostelService) { }

  ngOnInit() {
  }

  add(){
    console.log("Inside add");
    console.log(this.hostel);
    console.log(this.hostel.type);
    this.hostelService.addHostel(this.hostel).subscribe(
      data =>{
        console.log(data);
        return;
      },
      error =>{
        console.log(error);
        return;
      }
    );

  }

}
