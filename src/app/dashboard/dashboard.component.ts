import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FileUploadService } from './upload-file-api-service/upload-file.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardPage implements OnInit {

  constructor(private uploadservice: FileUploadService) { }

  myForm: FormGroup
  ImageFile: any;

  ngOnInit(): void {

  }


  changeListener($event): void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: any = new FileReader();

    myReader.onloadend = (e) => {
      this.ImageFile = myReader.result.split(',')[1];
      // console.log('imagefile', this.ImageFile);
    }
    myReader.readAsDataURL(file);
  }

  uploadImage() {
    this.uploadservice.uploadImage(this.ImageFile)
      .subscribe((res) => {
        console.log('res', res);

      }, (err) => {
        console.log('error', err);

      })
  }

}
