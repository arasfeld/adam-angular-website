import { Component } from '@angular/core';

import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(private layout: LayoutService) {
    this.layout.title = 'Not Found';
  }
}
