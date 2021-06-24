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

  // sid: number;
  // hid:number;
  date: string;
  value: any;
  visitors: Visitor[]
  searchOption: string;
  constructor(public visitorService: VisitorService) {
    this.searchOption == "byStudentId"
  }

  ngOnInit () {
    this.visitorService.viewAll().subscribe(
      data => {
        this.visitors = data
      },
      error => {
        console.log(error);

      }
    )
  }

  viewOption () {
    console.log(this.searchOption);
    if (this.searchOption == "byStudentId") {
      this.viewById();
    }

    else if (this.searchOption == "byDate")
      this.viewByDate();

    else if (this.searchOption == "byDateHostelId") {
      this.viewByDateHostelId();
    }


  }

  viewById () {
    console.log(this.value);
    if (this.value == undefined || this.value == null || this.value <= 0) {
      this.errorMsgs[0] = "Enter the Hostel ID greater than 0"
      return;
    }
    this.visitorService.viewById(this.value).subscribe(
      data => {
        this.visitor = [];
        data.forEach(e => {
          this.visitor.push(e);
        });
        this.errorMsgs = undefined;
      },
      error => {
        console.log(error);
        this.errorMsgs = error.error.messages;
        console.log(this.errorMsgs);

      }
    )
  }

  viewByDate () {
    console.log(this.value);
    this.visitorService.viewByDate(this.value).subscribe(
      data => {
        this.visitor = [];
        data.forEach(e => {
          this.visitor.push(e);
        });
        this.errorMsgs = undefined;
      },
      error => {
        console.log(error);
        this.errorMsgs = error.error.messages;
        console.log(this.errorMsgs);

      }
    )
  }

  viewByDateHostelId () {
    console.log("in funciton")
    this.visitorService.viewByDateHostelId(this.date, this.value).subscribe(
      data => {
        this.visitor = [];
        data.forEach(e => {
          this.visitor.push(e);
        });
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
  inputSearchType (): string {
    if (this.searchOption == "byStudentId" || this.searchOption == "byDateHostelId") {
      return "number";
    }

    else if (this.searchOption == "byDate") {
      return "date";
    }

  }
}

