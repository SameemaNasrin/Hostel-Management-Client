import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payfee } from 'src/app/dto/payfee';
import { Userinfo } from 'src/app/dto/userinfo';
import { FeestructureService } from 'src/app/services/feestructure.service';
import { StorageService } from 'src/app/services/storage.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  userInfo: Userinfo = new Userinfo();
  responseMsg: string;
  isAllotted = false;
  errorMsgs = []
  successMsg: string;
  formErrorMsgs = []
  payFee: Payfee = new Payfee();
  constructor(private storageService: StorageService, private studentService: StudentService, private feeStructureService: FeestructureService, private router: Router) { }
  ngOnInit () {
    if (this.storageService.getUserInfo() != "") {
      this.userInfo = JSON.parse(this.storageService.getUserInfo());
    }
    if (this.userInfo.role == 'student') {
      this.errorMsgs = []
      this.studentService.getAllotmentDeatails(this.userInfo.id).subscribe(
        data => {

          if (data.paymentStatus == "paid") {
            this.errorMsgs.push("You have already paid")
          }
          else {
            this.payFee.amount = data.totalFees;
          }

        },
        error => {
          error.error.messages.forEach(element => {
            this.errorMsgs.push(element)
          });

        }
      )
    }

  }
  payFees (): void {
    this.feeStructureService.payByStudentId(this.payFee, this.userInfo.id).subscribe(
      data => {
        this.successMsg = data.message;
        setTimeout(() => {

        }, 1000);
        this.router.navigateByUrl("/");
      },
      error => {
        error.error.messagges.forEach(element => {
          this.formErrorMsgs.push(element);
        });
      }
    )


  }

}
