import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { HostelDto } from 'src/app/dto/hosteldto';
import { Hostel } from 'src/app/entities/hostel';
import { HostelService } from 'src/app/services/hostel.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-addhostel',
  templateUrl: './addhostel.component.html',
  styleUrls: ['./addhostel.component.css']
})
export class AddhostelComponent implements OnInit {

  hostelDto: HostelDto = new HostelDto();
  msg: string = undefined;
  errorMsgs = [];

  img: string;
  filePath: string;
  fileExtension: string;
  isLoading: boolean = false;

  @ViewChild("addHostel")
  private form: NgForm;

  constructor(private hostelService: HostelService, private storageService: StorageService, private fireStorage: AngularFireStorage) { }

  ngOnInit () {

  }

  upload (event) {
    this.filePath = event.target.files[0]
    this.fileExtension = event.target.files[0].name.substring(event.target.files[0].name.lastIndexOf('.') + 1)

  }
  addHostelFormSubmit (): void {

    this.isLoading = true;
    let path = "/hostel_images/" + Date.now() + "_" + Date.now().toString().substring(0, 2) + "." + this.fileExtension;
    const fileRef = this.fireStorage.ref(path);

    this.fireStorage
      .upload(path, this.filePath)
      .then((data) => {
        fileRef.getDownloadURL().subscribe(
          (url) => {
            this.hostelDto.imgUrl = url;
            this.hostelService.addHostel(this.hostelDto).subscribe(
              data => {
                this.isLoading = false;
                this.errorMsgs = [];
                this.msg = data.message;
                this.form.reset();
              },
              error => {
                this.isLoading = false;
                this.msg = undefined;
                error.error.messages.forEach(m => {
                  this.errorMsgs.push(m)
                });
              }
            )
          }
        )
      })
      .catch(err => {
        console.log(err);

      })

  }
}