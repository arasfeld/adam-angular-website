import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BlogService } from '../blog.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postForm: FormGroup;
  isRequesting: boolean;
  imgSrc: string;
  submitted: boolean = false;

  constructor(
    private blogService: BlogService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      file: ['']
    });
    this.onChanges();
  }

  onChanges(): void {
    this.postForm.controls['file'].valueChanges.subscribe(val => {
      if (val && val.files && val.files[0]) {
        let fileReader = new FileReader();
        fileReader.onload = () => this.imgSrc = fileReader.result;
        fileReader.readAsDataURL(val.files[0]);
      }
      else {
        this.imgSrc = null;
      }
    });
  }

  submit(): void {
    this.submitted = true;
    this.isRequesting = true;
    
  }
}