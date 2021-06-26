import { Component, OnInit } from '@angular/core';
import { HostelDto } from 'src/app/dto/hosteldto';
import { HostelService } from 'src/app/services/hostel.service';

@Component({
  selector: 'app-viewallhostels',
  templateUrl: './viewallhostels.component.html',
  styleUrls: ['./viewallhostels.component.css']
})
export class ViewallhostelsComponent implements OnInit {

  hostels: HostelDto[];
  errorMsgs = []
  // hid: number;

  value:any = undefined;
  searchOption:string = "viewAll";

  constructor(public hostelService: HostelService) { }

  ngOnInit () {
    this.hostelService.viewAll().subscribe(
      data => {
        this.errorMsgs = undefined;
        this.hostels = data

      },

      error => {
        this.hostels = [];
        this.errorMsgs = error.error.messages;
        this.hostels = undefined;

      }
    )
  }

  viewAll(){
    // console.log(this.value)
    this.hostelService.viewAll().subscribe(
      data => {
        this.errorMsgs = undefined;
        this.hostels = data

      },

      error => {
        this.hostels = [];
        this.errorMsgs = error.error.messages;
      }
    )
  }

  viewById () {
    console.log(this.value);
    if (this.value == undefined || this.value == null || this.value <= 0) {
      this.errorMsgs[0] = "Enter the Hostel ID greater than 0"
      return;
    }
    this.hostelService.viewById(this.value).subscribe(
      data => {
        console.log(data);
        this.hostels = [];
        this.hostels.push(data);
        this.errorMsgs = undefined;
      },
      error => {
        this.hostels = [];
        this.errorMsgs = error.error.messages;
      }
    )
    this.value = undefined;
  }

  viewByName(){
    this.errorMsgs = [];
    this.hostelService.viewByName(this.value).subscribe(
      data => {
        this.hostels = data;
      },
      error => {
        this.hostels = [];

        this.errorMsgs.push(error.error.messages)

      }
    )
    this.value = undefined;
  }
  
  viewOption(){
    console.log(this.searchOption);
    if(this.searchOption == "byId"){
      this.viewById();
    }

    else if(this.searchOption == "byName"){
      this.viewByName();
    }

    else if(this.searchOption == "viewAll"){
      // this.value = 'all'
      this.viewAll();
    }
  }

 

  inputSearchType():string{
    if(this.searchOption == "byId"){
      return "number";
    }

    else if(this.searchOption == "byName"){
      return "text";
    }
  }
}
