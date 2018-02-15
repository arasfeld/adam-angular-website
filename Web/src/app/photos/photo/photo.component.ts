import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Photo } from '../photo.model';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  photoForm: FormGroup;
  loading: boolean = false;
  imgSrc: string;

  constructor(
    private photosService: PhotosService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.photoForm = this.fb.group({
      title: '',
      caption: '',
      file: ['', Validators.required]
    });
    this.onChanges();
  }

  onChanges(): void {
    this.photoForm.controls['file'].valueChanges.subscribe(val => {
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
    let file = this.photoForm.value.file;
    if (this.photoForm.valid && file.files && file.files[0]) {
      let photo = this.createFormData();
      this.photosService.addPhoto(photo)
        .finally(() => this.loading = false)
        .subscribe(response => {
          console.log(response);
        },
        (err: Response) => {
          console.log(err);
        });
    }
  }

  createFormData(): FormData {
    let formData = new FormData();
    formData.append('title', this.photoForm.value.title);
    formData.append('caption', this.photoForm.value.caption);

    // Add image file
    let file = this.photoForm.value.file;
    formData.append('file', file.files[0]);

    return formData;
  }
}