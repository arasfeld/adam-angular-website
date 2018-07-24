import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.addSvgIcon(
      'octocat',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/octocat.svg')
    );
  }
}
