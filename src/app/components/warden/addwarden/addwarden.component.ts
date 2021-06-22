import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Wardendto } from 'src/app/dto/wardendto';
import { WardenService } from 'src/app/services/warden.service';

@Component({
  selector: 'app-addwarden',
  templateUrl: './addwarden.component.html',
  styleUrls: ['./addwarden.component.css']
})
export class AddwardenComponent implements OnInit {

  wardendto : Wardendto =new Wardendto();
  responseMsg: string;
  errorMsgs = []
  @ViewChild("addWardenForm")
  private form: NgForm
  constructor(private wardenService:WardenService) {

   }

  ngOnInit() {
  }

  addWarden (): void {
    this.errorMsgs = []
    this.responseMsg = undefined
    this.wardenService.addWarden(this.wardendto).subscribe(
      data => {
        this.form.reset()
        this.responseMsg = "Generated Student Id is: " + data.id;
      },
      error => {
        error.error.messages.forEach(e => {
          this.errorMsgs.push(e)
        });

      }
    )

    }

}
