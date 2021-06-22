import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HostelDto } from 'src/app/dto/hosteldto';
import { HostelService } from 'src/app/services/hostel.service';

@Component({
  selector: 'app-addhostel',
  templateUrl: './addhostel.component.html',
  styleUrls: ['./addhostel.component.css']
})
export class AddhostelComponent implements OnInit {

  hostel:HostelDto = new HostelDto();
  msg:string = "";
  @ViewChild("addHostel")
  private addHostel: NgForm;

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
        this.msg = data.message;
        this.addHostel.reset();
          return;
        },
        error =>{
          console.log(error);
          this.msg = error.error.messages[0];
        return;
      }
    );

  }

}
