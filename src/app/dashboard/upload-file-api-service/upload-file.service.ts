import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { UrlService } from '../../shared/url.service';


@Injectable({
  providedIn: 'root'
})


export class FileUploadService {

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }


  uploadImage(data:string) {
  
  }

}
