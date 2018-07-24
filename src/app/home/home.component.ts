import { Component } from '@angular/core';

import { LayoutService } from '../core/layout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private layout: LayoutService) {
    this.layout.title = '';
  }
}
