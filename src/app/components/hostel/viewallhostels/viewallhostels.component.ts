import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { HostelDto } from 'src/app/dto/hosteldto';
import { HostelService } from 'src/app/services/hostel.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-viewallhostels',
  templateUrl: './viewallhostels.component.html',
  styleUrls: ['./viewallhostels.component.css']
})
export class ViewallhostelsComponent implements OnInit {

  hostels: HostelDto[];
  errorMsgs = []

  value: any = undefined;
  searchOption: string = "viewAll";
  userinfo: JSON;


  constructor(public hostelService: HostelService, public storageService: StorageService) { }
  ngOnInit () {
    // if(localStorage.length != 0)  {
    //   this.item = JSON.parse(localStorage.getItem("userinfo")).role;
    // }
    if (this.storageService.getUserInfo() != "") {
      this.userinfo = JSON.parse(this.storageService.getUserInfo())
    }



    this.viewAll();
  }

  viewAll () {

    this.hostelService.viewAll().subscribe(
      data => {
        this.errorMsgs = undefined;
        this.hostels = data;
        console.log(this.hostels);

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

  viewByName () {
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

  viewOption () {
    console.log(this.searchOption);
    if (this.searchOption == "byId") {
      this.viewById();
    }

    else if (this.searchOption == "byName") {
      this.viewByName();
    }

    else if (this.searchOption == "viewAll") {
      // this.value = 'all'
      this.viewAll();
    }
  }



  inputSearchType (): string {
    if (this.searchOption == "byId") {
      return "number";
    }

    else if (this.searchOption == "byName") {
      return "text";
    }
  }


}
