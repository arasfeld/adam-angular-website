import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

import { LayoutService } from './shared/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  opened: boolean = true;
  watcher: Subscription;

  constructor(
    private layoutService: LayoutService,
    media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      let activeMediaQuery = change.mqAlias;
      if (change.mqAlias == 'xs') {
        this.opened = false;
      }
      else {
        this.opened = true;
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
