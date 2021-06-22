import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hosteldto } from 'src/app/dto/hosteldto';
import { Hostel } from 'src/app/entities/hostel';
import { HostelService } from 'src/app/services/hostel.service';

@Component({
  selector: 'app-addhostel',
  templateUrl: './addhostel.component.html',
  styleUrls: ['./addhostel.component.css']
})
export class AddhostelComponent implements OnInit {

  hostel:Hostel = new Hostel();
  msg:string = undefined;
  errorMsgs = [];
  @ViewChild("addHostel")
  private form: NgForm;

  constructor(public hostelService:HostelService) { }

  ngOnInit() {
  }

  
  add(): void {

    this.hostelService.addHostel(this.hostel).subscribe(
      data => {
        console.log(data);
        this.errorMsgs = [];
        this.msg = data.message;
        this.form.reset();
      },
      error => {
        console.log(error);
        this.msg = undefined;
        error.error.messages.forEach(m => {
          this.errorMsgs.push(m)
        });
      }
    )
  }
}