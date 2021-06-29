import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hostel } from 'src/app/entities/hostel';
import { HostelService } from 'src/app/services/hostel.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-addhostel',
  templateUrl: './addhostel.component.html',
  styleUrls: ['./addhostel.component.css']
})
export class AddhostelComponent implements OnInit {

  hostel: Hostel = new Hostel();
  msg: string = undefined;
  errorMsgs = [];

  img: string;

  @ViewChild("addHostel")
  private form: NgForm;

  constructor(private hostelService: HostelService, private storageService: StorageService) { }

  ngOnInit () {

  }


  add (): void {
    this.hostel.imgUrl = this.img.split("\\")[2];
    this.hostel.imgUrl = "..\\assets\\" + this.hostel.imgUrl;
    console.log(this.hostel.imgUrl);

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