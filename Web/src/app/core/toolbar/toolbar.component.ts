import { Component } from '@angular/core';

import { LayoutService } from '../layout.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  
  constructor(private layout: LayoutService) {}
}
