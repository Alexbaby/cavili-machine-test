import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { UrlService } from '../../shared/url.service';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient, private urlService: UrlService) {}

  uploadImage(data: any) {
    const url = this.urlService.getHostURL() + '/upload';
    const body = data;
    return this.http.post(url, body);
  }

  viewImage(data) {
    const url = this.urlService.getHostURL() + `/uploads/${data}`;
    return this.http.get(url)
  }
}
