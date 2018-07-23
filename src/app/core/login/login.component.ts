import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { finalize } from 'rxjs/operators';

import { LayoutService } from '../layout.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private layout: LayoutService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.layout.title = 'Login';
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.loading = true;
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value.username, this.loginForm.value.password)
        .pipe(finalize(() => this.loading = false))
        .subscribe(result => {         
          if (result) {
            this.snackBar.open('Successfully logged in.', null, { duration: 3000, panelClass: 'snackbar-success' });
            this.router.navigate(['']);             
          }
        },
        error => {
          this.snackBar.open('Error logging in.', null, { duration: 3000, panelClass: 'snackbar-error' });
        });
    }
  }
}
