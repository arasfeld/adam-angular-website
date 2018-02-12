import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  showIcon: boolean = false;
  watcher: Subscription;

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      let activeMediaQuery = change.mqAlias;
      if (change.mqAlias == 'xs') {
        this.showIcon = true;
      }
      else {
        this.showIcon = false;
      }
    });
  }

  toggleSidenav() {
    
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
