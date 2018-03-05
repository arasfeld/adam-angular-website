import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { LayoutService } from '../../core/layout.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postId: number;
  postForm: FormGroup;
  loading: boolean = false;
  imgSrc: string;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.postId = +params['id'];
        this.getPost();
      }
    });
  }

  getPost() {
    this.loading = true;
    this.postsService.getPost(this.postId)
      .finally(() => this.loading = false)
      .subscribe((post: Post) => {
        this.postForm.patchValue({
          title: post.title,
          body: post.body,
          file: post.image ? post.image.fileName : null
        });
        this.imgSrc = post.image ? `data:${post.image.contentType};base64,${post.image.data}` : null; 
      },
      (err: Response) => {
        this.snackBar.open('Error getting post.', null, { duration: 3000, panelClass: 'snackbar-error' });
      });
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

  cancel(): void {
    this.router.navigate(['/blog']);
  }

  delete(): void {
    this.loading = true;
    this.postsService.deletePost(this.postId)
      .finally(() => this.loading = false)
      .subscribe(response => {
        this.snackBar.open('Successfully deleted post.', null, { duration: 3000, panelClass: 'snackbar-success' });
      },
      (err: Response) => {
        this.snackBar.open('Error deleting post.', null, { duration: 3000, panelClass: 'snackbar-error' });
      });
  }

  submit(): void {
    this.loading = true;
    if (this.postForm.valid) {
      let post = this.createFormData();
      this.postsService.addPost(post)
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