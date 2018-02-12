import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class LayoutService {
  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor() {
    this._authNavStatusSource.next(this.loggedIn);
  }
}

