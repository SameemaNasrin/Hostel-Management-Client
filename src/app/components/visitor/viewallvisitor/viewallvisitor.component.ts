import { Component, Input, OnInit } from '@angular/core';
import { Visitor } from 'src/app/entities/visitor';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-viewallvisitor',
  templateUrl: './viewallvisitor.component.html',
  styleUrls: ['./viewallvisitor.component.css']
})
export class ViewallvisitorComponent implements OnInit {

  visitor: Visitor[];
  errorMsgs = []

  sid: number;
  hid:number;
  date:string;

  searchOption:string;
  constructor(public visitorService: VisitorService) { }

  ngOnInit () {
    
  }

  viewOption(){
    console.log(this.searchOption);
    if(this.searchOption == "byStudentId"){
      this.viewById();
    }

    else if(this.searchOption == "byDate")
      this.viewByDate();


  }

  viewById () {
    console.log(this.sid);
    if (this.sid == undefined || this.sid == null || this.sid <= 0) {
      this.errorMsgs[0] = "Enter the Hostel ID greater than 0"
      return;
    }
    this.visitorService.viewById(this.sid).subscribe(
      data => {
        this.visitor = [];
        this.visitor.push(data[0]);
        this.errorMsgs = undefined;
      },
      error => {
        console.log(error);
        this.errorMsgs = error.error.messages;
        console.log(this.errorMsgs);

      }
    )
  }

  viewByDate(){
    console.log(this.date);
    this.visitorService.viewByDate(this.date).subscribe(
      data => {
        this.visitor = [];
        this.visitor.push(data[0]);//how to get multiple data ?
        this.errorMsgs = undefined;
      },
      error => {
        console.log(error);
        this.errorMsgs = error.error.messages;
        console.log(this.errorMsgs);

      }
    )
  }

  /*
   * Setting the search type 
   */
  inputSearchType():string{
    if(this.searchOption == "byStudentId" || this.searchOption == "byDateHostelId"){
      return "number";
    }

    else if(this.searchOption == "byDate"){
      return "date";
    }

  }
}

