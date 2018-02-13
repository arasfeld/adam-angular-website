import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(
    private userService: UserService, 
    private router: Router, 
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.submitted = true;
    this.isRequesting = true;
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value.email, this.loginForm.value.password)
        .finally(() => this.isRequesting = false)
        .subscribe(result => {         
          if (result) {
             this.router.navigate(['']);             
          }
        },
        error => {
          console.log(error);
        });
    }
  }
}
