import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(
    private layout: LayoutService,
    private router: Router, 
    private fb: FormBuilder
  ) {
    this.layout.title = 'Contact Me';
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    this.isRequesting = true;
    if (this.contactForm.valid) {
      
    }
  } 
}
