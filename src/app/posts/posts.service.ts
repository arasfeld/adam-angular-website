import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Post } from './post.model';

@Injectable()
export class PostsService {
  API_BASE_URL: string = ''; 

  constructor(private http: HttpClient) {
     this.API_BASE_URL = environment.apiBaseUrl;
  }

  getPosts() {
    return this.http.get<Post[]>(`${this.API_BASE_URL}/Posts`);
  }

  getPost(id: number) {
    return this.http.get<Post>(`${this.API_BASE_URL}/Posts/${id}`);
  }

  addPost(post: FormData) {
    let authToken = localStorage.getItem('auth_token');
    let headers = new HttpHeaders({'Authorization': `Bearer ${authToken}`});
    return this.http.post<Post>(`${this.API_BASE_URL}/Posts`, post, { 'headers': headers });
  }

  editPost(post: Post) {
    let authToken = localStorage.getItem('auth_token');
    let headers = new HttpHeaders({'Authorization': `Bearer ${authToken}`});
    return this.http.put<Post>(`${this.API_BASE_URL}/Posts`, post, { 'headers': headers });
  }

  deletePost(id: number) {
    let authToken = localStorage.getItem('auth_token');
    let headers = new HttpHeaders({'Authorization': `Bearer ${authToken}`});
    return this.http.delete(`${this.API_BASE_URL}/Posts/${id}`, { 'headers': headers });
  }
}