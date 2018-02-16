import { Component } from '@angular/core';

import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
 
  constructor(private layout: LayoutService) {
    this.layout.title = 'Resume';
  }
}
