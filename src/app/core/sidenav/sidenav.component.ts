import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatIconRegistry, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

import { UserService } from '../user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit, OnDestroy {
  status: boolean;
  subscription: Subscription;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.addSvgIcon('github', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
  }

  logout() {
     this.userService.logout();
     this.snackBar.open('Successfully logged out.', null, { duration: 3000, panelClass: 'snackbar-success' });
     this.router.navigate(['']);     
  }

  ngOnInit() {
    this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
