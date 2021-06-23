import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Wardendto } from 'src/app/dto/wardendto';
import { HostelService } from 'src/app/services/hostel.service';
import { WardenService } from 'src/app/services/warden.service';

@Component({
  selector: 'app-addwarden',
  templateUrl: './addwarden.component.html',
  styleUrls: ['./addwarden.component.css']
})
export class AddwardenComponent implements OnInit {

  wardendto: Wardendto = new Wardendto();
  responseMsg: string;
  errorMsgs = []

  @ViewChild("addWardenForm")
  private form: NgForm
  constructor(private wardenService: WardenService, private hostelService: HostelService) {

  }

  ngOnInit () {
    this.hostelService.viewAll().subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error);

      }
    )
  }

  addWarden (): void {
    this.errorMsgs = []
    this.responseMsg = undefined
    this.wardenService.addWarden(this.wardendto).subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error);
      }
    )

  }

}
