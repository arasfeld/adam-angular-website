import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Injectable()
export class LayoutService implements OnDestroy {
  private watcher: Subscription;

  private _sidenavOpen = new BehaviorSubject<boolean>(false);
  public sidenavOpen = this._sidenavOpen.asObservable();

  private _showMenuIcon = new BehaviorSubject<boolean>(false);
  public showMenuIcon = this._showMenuIcon.asObservable();

  private _sidenavMode = new BehaviorSubject<string>('side');
  public sidenavMode = this._sidenavMode.asObservable();

  public title = '';

  constructor(private media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      const activeMediaQuery = change.mqAlias;
      if (change.mqAlias === 'xs') {
        this._sidenavOpen.next(false);
        this._showMenuIcon.next(true);
        this._sidenavMode.next('over');
      } else {
        this._sidenavOpen.next(true);
        this._showMenuIcon.next(false);
        this._sidenavMode.next('side');
      }
    });
  }

  toggleSidenav() {
    this._sidenavOpen.next(!this._sidenavOpen.value);
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
