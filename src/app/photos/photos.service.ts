import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Photo } from './photo.model';

@Injectable()
export class PhotosService {
  API_BASE_URL: string = ''; 

  constructor(private http: HttpClient) {
     this.API_BASE_URL = environment.apiBaseUrl;
  }

  getPhotos() {
    return this.http.get<Photo[]>(`${this.API_BASE_URL}/Photos`);
  }

  getPhoto(id: number) {
    return this.http.get<Photo>(`${this.API_BASE_URL}/Photos/${id}`);
  }

  addPhoto(photo: FormData) {
    let authToken = localStorage.getItem('auth_token');
    let headers = new HttpHeaders({'Authorization': `Bearer ${authToken}`});
    return this.http.post(`${this.API_BASE_URL}/Photos`, photo, { 'headers': headers });
  }

  editPhoto(photo: FormData) {
    let authToken = localStorage.getItem('auth_token');
    let headers = new HttpHeaders({'Authorization': `Bearer ${authToken}`});
    return this.http.put(`${this.API_BASE_URL}/Photos`, photo, { 'headers': headers });
  }

  deletePhoto(id: number) {
    let authToken = localStorage.getItem('auth_token');
    let headers = new HttpHeaders({'Authorization': `Bearer ${authToken}`});
    return this.http.delete(`${this.API_BASE_URL}/Photos/${id}`, { 'headers': headers });
  }
}