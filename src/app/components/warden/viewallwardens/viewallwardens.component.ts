import { Component, OnInit } from '@angular/core';
import { Warden } from 'src/app/entities/warden';
import { WardenService } from 'src/app/services/warden.service';
@Component({
  selector: 'app-viewallwardens',
  templateUrl: './viewallwardens.component.html',
  styleUrls: ['./viewallwardens.component.css']
})
export class ViewallwardensComponent implements OnInit {

  wardens:Warden[]
  errorMsgs = []
  wid: number;
  constructor(private wardenService: WardenService) { }
  

  ngOnInit() {

    this.wardenService.getWardens().subscribe(
      data => {
        this.wardens = data;
        console.log(this.wardens);
      },
      error => {
        console.log(error);

      }
    )

  }
  viewByWId () {
    console.log(this.wid);
    if (this.wid == undefined || this.wid == null || this.wid <= 0) {
      this.errorMsgs[0] = "Enter the Warden ID greater than 0"
      return;
    }
    this.wardenService.viewByWId(this.wid).subscribe(
      data => {
        console.log(data);
        this.wardens = [];
        this.wardens.push(data);
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