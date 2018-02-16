import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { LayoutService } from '../../core/layout.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postForm: FormGroup;
  loading: boolean = false;
  imgSrc: string;

  constructor(
    private postsService: PostsService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      file: [null]
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
    this.loading = true;
    if (this.postForm.valid) {
      let post = this.createFormData();
      this.postsService.addPostNew(post)
        .finally(() => this.loading = false)
        .subscribe(response => {
          this.snackBar.open('Successfully added new post.', null, { duration: 3000, panelClass: 'snackbar-success' });
        },
        (err: Response) => {
          this.snackBar.open('Error adding new post.', null, { duration: 3000, panelClass: 'snackbar-error' });
        });
    }
  }

  createFormData(): FormData {
    let formData = new FormData();
    formData.append('title', this.postForm.value.title);
    formData.append('body', this.postForm.value.body);

    // Add image file if one is selected
    let file = this.postForm.value.file;
    if (file && file.files && file.files[0]) {
      formData.append('file', file.files[0]);
    }

    return formData;
  }
}