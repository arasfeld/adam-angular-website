import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

@Injectable()
export class LayoutService implements OnDestroy {
  private watcher: Subscription;
  private _sidenavOpen = false;
  private _showMenuIcon = false;

  constructor(private media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      let activeMediaQuery = change.mqAlias;
      if (change.mqAlias == 'xs') {
        this._sidenavOpen = false;
        this._showMenuIcon = true;
      }
      else {
        this._sidenavOpen = true;
        this._showMenuIcon = false;
      }
    });
  }

  toggleSidenav() {
    this._sidenavOpen = !this._sidenavOpen;
  }

  isSidenavOpen() {
    return this._sidenavOpen;
  }

  showMenuIcon() {
    return this._showMenuIcon;
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}

