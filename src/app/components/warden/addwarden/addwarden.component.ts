import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Wardendto } from 'src/app/dto/wardendto';
import { Hostel } from 'src/app/entities/hostel';
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
  hostels: Hostel[] = []

  @ViewChild("addWardenForm")
  private form: NgForm
  constructor(private wardenService: WardenService, private hostelService: HostelService) {

  }

  ngOnInit () {
    this.hostelService.viewAll().subscribe(
      data => {
        this.hostels = data
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
        this.form.reset()
        this.responseMsg = data.message;

      },
      error => {
        error.error.messages.forEach(e => {
          this.errorMsgs.push(e)
        });
      }
    )

  }

}
