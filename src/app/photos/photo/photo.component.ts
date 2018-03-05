import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo.model';
import { PhotosService } from '../photos.service';
import { LayoutService } from '../../core/layout.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  photoId: number;
  photo: Photo;
  loading: boolean = false;
  imgSrc: string;

  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
      this.route.params.subscribe(params => {
        this.photoId = +params['id'];
        this.getPhoto();
      });
  }

  getPhoto(): void {
    this.loading = true;
    this.photosService.getPhoto(this.photoId)
      .finally(() => this.loading = false)
      .subscribe((photo: Photo) => {
        this.photo = photo;
      },
      (err: Response) => {
        this.snackBar.open('Error getting photo.', null, { duration: 3000, panelClass: 'snackbar-error' });
      });
  }
}