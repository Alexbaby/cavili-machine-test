import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FileUploadService } from './upload-file-api-service/upload-file.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardPage implements OnInit {
  constructor(private uploadservice: FileUploadService) {}

  myForm: FormGroup;
  ImageFile: any;
  error = {
    message: '',
  };

  ngOnInit(): void {}

  changeListener(files: any): void {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.uploadservice.uploadImage(formData).subscribe((res) => {
      console.log(res);
      
    })
  }
  // readThis(inputValue: any): void {
  //   var file: File = inputValue.files[0];
  //   var myReader: any = new FileReader();

  //   myReader.onloadend = (e) => {
  //     this.ImageFile = myReader.result.split(',')[1];
  //     // console.log('imagefile', this.ImageFile);
  //   };
  //   myReader.readAsDataURL(file);
  // }

  uploadImage() {
    this.uploadservice.uploadImage(this.ImageFile).subscribe(
      (res) => {
        console.log('res', res);
      },
      (err) => {
        if (err) {
          console.log('error', err);
          this.error.message = err.error.message;
        }
      }
    );
  }
}
