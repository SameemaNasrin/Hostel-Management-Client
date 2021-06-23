import { Component, OnInit } from '@angular/core';
import { Visitordto } from 'src/app/dto/visitordto';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-viewallvisitor',
  templateUrl: './viewallvisitor.component.html',
  styleUrls: ['./viewallvisitor.component.css']
})
export class ViewallvisitorComponent implements OnInit {

  visitor: Visitordto[];
  errorMsgs = []
  vid: number;
  constructor(public visitorService: VisitorService) { }

  ngOnInit () {
    
  }

  viewById () {
    console.log(this.vid);
    if (this.vid == undefined || this.vid == null || this.vid <= 0) {
      this.errorMsgs[0] = "Enter the Hostel ID greater than 0"
      return;
    }
    this.visitorService.viewById(this.vid).subscribe(
      data => {
        console.log(data);
        this.visitor = [];
        this.visitor.push(data);
        this.errorMsgs = undefined;
        console.log(this.visitor);
      },
      error => {
        console.log(error);
        this.errorMsgs = error.error.messages;
        console.log(this.errorMsgs);

      }
    )
  }

}

