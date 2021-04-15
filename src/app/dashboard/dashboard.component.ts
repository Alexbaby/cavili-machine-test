import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

import { FileUploadService } from './upload-file-api-service/upload-file.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardPage implements OnInit {
  constructor(private uploadservice: FileUploadService, private http: HttpClient,) { }

  display_form: FormGroup;
  FormData: any;

  file: {
    name: any
  }

  error = {
    message: '',
  };

  displayError = {
    message: '',
  }

  ngOnInit(): void {
    this.display_form = new FormGroup({
      'filename': new FormControl(null, [Validators.required]),
    })
  }


  uploadImage(files: any) {
    console.log('files', files);
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.uploadservice.uploadImage(formData).subscribe(
      (res) => {
        console.log('res', res);
      },
      (err) => {
        if (err) {
          console.log('error', err);
          this.error.message = err.error.error.message;
        }
      }
    );
  }

  getImage() {
    if (this.display_form.invalid) {
      return
    }
    this.uploadservice.viewImage(this.display_form.value.filename)
      .subscribe((res: any) => {
        console.log('image', res);
      }, (err) => {
        if (err) {
          console.log('error', err);
          this.displayError.message = err.error.error.message;
        }

      })
  }
}
