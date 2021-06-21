import { Component, OnInit } from '@angular/core';
import { AllotmentserviceService } from 'src/app/services/allotmentservice.service';

@Component({
  selector: 'app-viewbyhid',
  templateUrl: './viewbyhid.component.html',
  styleUrls: ['./viewbyhid.component.css']
})
export class ViewbyhidComponent implements OnInit {
  hostelId:number;
  allotment:any = undefined;
  msg:string;
  constructor(public allotmentservice:AllotmentserviceService) { }

  ngOnInit() {
  }
  viewallotmentbyhid():void{
    if (this.hostelId==undefined || this.hostelId==null  || this.hostelId<=0){
      this.msg="Enter the Hostel ID greater than 0";
      return ;
    }
  }
}
