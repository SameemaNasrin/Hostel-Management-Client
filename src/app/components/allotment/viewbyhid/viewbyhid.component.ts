import { Component, OnInit } from '@angular/core';
import { Allotment } from 'src/app/entities/allotment';
import { AllotmentserviceService } from 'src/app/services/allotmentservice.service';

@Component({
  selector: 'app-viewbyhid',
  templateUrl: './viewbyhid.component.html',
  styleUrls: ['./viewbyhid.component.css']
})
export class ViewbyhidComponent implements OnInit {

  allotment:Allotment[]
  errorMsgs = []
  id: number;
  hid:number;
  constructor(public allotmentservice:AllotmentserviceService) { }
  

  ngOnInit() {
    
  }
 
  viewallotmentbyhid() {
    console.log(this.id);
    if (this.hid == undefined || this.hid == null || this.hid <= 0) {
      this.errorMsgs[0] = "Enter the Hostel ID greater than 0"
      return;
    }

    this.allotmentservice.viewallotmentbyhid(this.hid).subscribe(
      data => {
        console.log(data);
        this.allotment = [];
        data.forEach(e => {
          this.allotment.push(e);
        });
         
        console.log(this.allotment);
        this.errorMsgs = undefined;
      },
      error => {
        console.log(error);
        this.errorMsgs = error.error.messages;
        console.log(this.errorMsgs);

      }
    )
  }
  deleteallotment(){
    console.log(this.id)
    if (this.id == undefined || this.id == null || this.id <= 0) {
      this.errorMsgs[0] = "Enter Correct Allotment Id"
      return;
    }
    this.allotmentservice.deleteallotment(this.id).subscribe(
      error => {
        error.error.messages.forEach(e => {
          this.errorMsgs.push(e)
        });
      }
    )

  }

}