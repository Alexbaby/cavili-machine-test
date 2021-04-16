import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { UrlService } from '../../shared/url.service';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient, private urlService: UrlService) {}

  uploadImage(data: any) {
    console.log('image string');
    const url = this.urlService.getHostURL() + '/upload';
    const body = data;
    console.log('data',body);
    
    return this.http.post(url, body);
  }

  viewImage(data) {}
}
