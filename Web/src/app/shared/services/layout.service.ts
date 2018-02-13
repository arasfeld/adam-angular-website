import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class LayoutService {
  // Observable sidenav source
  private _sidenavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable sidenav stream
  sidenavStatus$ = this._sidenavStatusSource.asObservable();

  private sidenavOpen = false;

  constructor() {
    this._sidenavStatusSource.next(this.sidenavOpen);
  }

  openSidenav() {
    this.sidenavOpen = true;
    this._sidenavStatusSource.next(this.sidenavOpen);
  }

  closeSidenav() {
    this.sidenavOpen = false;
    this._sidenavStatusSource.next(this.sidenavOpen);
  }

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
    this._sidenavStatusSource.next(this.sidenavOpen);
  }

  isSidenavOpen() {
    return this.sidenavOpen;
  }
}

