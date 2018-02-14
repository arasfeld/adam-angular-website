import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx'; 

import { environment } from '../../environments/environment';

@Injectable()

export class PhotosService {
  API_BASE_URL: string = ''; 

  constructor(private http: HttpClient) {
     this.API_BASE_URL = environment.apiBaseUrl;
  }

  getPhotos() {
    return null;
  }

  getPhoto(id: number) {
    return null;
  }

  addPhoto(file: any) {
    let fileData = new FormData();
    fileData.append("file", file);
    let authToken = localStorage.getItem('auth_token');
    let headers = new HttpHeaders({'Authorization': `Bearer ${authToken}`});
    return this.http.post(`${this.API_BASE_URL}/Photos`, fileData, { 'headers': headers });
  }

  editPhoto(file: any) {
    return null;
  }

  deletePhoto(id: number) {
    return null;
  }
}