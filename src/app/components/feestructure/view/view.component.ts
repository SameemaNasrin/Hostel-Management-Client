import { Component, OnInit } from '@angular/core';
import { Feestructure } from 'src/app/entities/feestructure';
import { FeestructureService } from 'src/app/services/feestructure.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  searchOption = "viewUnpaid";
  feeStructure:Feestructure[];
  errorMsgs = [];
  studentID:number;

  constructor(public feeStructureService: FeestructureService) { }

  ngOnInit() {
    this.viewUnpaid();

  }

  
  viewOption () {
    console.log(this.searchOption);
    if (this.searchOption == "viewUnpaid") {
      this.viewUnpaid();
    }

    else if (this.searchOption == "byStudentId"){
      this.viewByStudentId();

    }

  }

  viewUnpaid(){
    this.feeStructureService.viewUnpaid().subscribe(
      data => {
        this.feeStructure = [];
        data.forEach(e => {
          this.feeStructure.push(e);
        });
        this.errorMsgs = undefined;
      },
      error => {
        this.feeStructure = [];
        this.errorMsgs = error.error.messages;
      }
    )

  }

  viewByStudentId(){
    this.feeStructureService.viewByStudentId(this.studentID).subscribe(
      data =>{
        this.feeStructure = [];
        data.forEach(e => {
          this.feeStructure.push(e);
        });
        this.errorMsgs = undefined;
      },
      error => {
        this.feeStructure = [];
        this.errorMsgs = error.error.messages;
      }
    )

  }

}
