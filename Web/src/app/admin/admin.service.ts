import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Rx'; 

// Add the RxJS Observable operators we need in this app.
import '../rxjs-operators';

@Injectable()

export class AdminService {
  API_BASE_URL: string = ''; 

  constructor(private http: Http) {
     this.API_BASE_URL = environment.apiBaseUrl;
  }
}