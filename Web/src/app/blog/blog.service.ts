import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx'; 

import { environment } from '../../environments/environment';

// Add the RxJS Observable operators we need in this app.
import '../rxjs-operators';

@Injectable()

export class BlogService {
  API_BASE_URL: string = ''; 

  constructor(private http: HttpClient) {
     this.API_BASE_URL = environment.apiBaseUrl;
  }

  getPosts() {
    return null;
  }

  getPost(id: number) {
    return null;
  }

  addPost(file: any) {
    let fileData = new FormData();
    fileData.append("file", file);
    let authToken = localStorage.getItem('auth_token');
    let headers = new HttpHeaders({'Authorization': `Bearer ${authToken}`});
    return this.http.post(`${this.API_BASE_URL}/Posts`, fileData, { 'headers': headers });
  }

  editPost(file: any) {
    return null;
  }

  deletePost(id: number) {
    return null;
  }
}