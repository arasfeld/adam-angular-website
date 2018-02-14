import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PhotosService } from '../photos.service';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  photoForm: FormGroup;
  isRequesting: boolean;
  imgSrc: string;
  submitted: boolean = false;

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
    this.submitted = true;
    this.isRequesting = true;
    let file = this.photoForm.value.file;
    if (this.photoForm.valid && file.files && file.files[0]) {
      this.photosService.addPhoto(file.files[0])
        .subscribe(response => {
          console.log(response);
        },
        (err: Response) => {
          console.log(err);
        });
    }
  }
}