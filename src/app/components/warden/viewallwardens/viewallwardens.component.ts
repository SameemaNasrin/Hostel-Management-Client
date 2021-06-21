import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallwardens',
  templateUrl: './viewallwardens.component.html',
  styleUrls: ['./viewallwardens.component.css']
})
export class ViewallwardensComponent implements OnInit {

  warden:any = undefined;
  msg:string;
  constructor() { }

  ngOnInit() {
  }

}
