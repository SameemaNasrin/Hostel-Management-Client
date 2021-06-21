import { Component, OnInit } from '@angular/core';
import { Warden } from 'src/app/entities/warden';
import { WardenService } from 'src/app/services/warden.service';
@Component({
  selector: 'app-viewallwardens',
  templateUrl: './viewallwardens.component.html',
  styleUrls: ['./viewallwardens.component.css']
})
export class ViewallwardensComponent implements OnInit {

  wardens:Warden[]
  constructor(private wardenService: WardenService) { }
  

  ngOnInit() {

    this.wardenService.getWardens().subscribe(
      data => {
        this.wardens = data;
        console.log(this.wardens);
      },
      error => {
        console.log(error);

      }
    )

}
}