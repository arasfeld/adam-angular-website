import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Photo } from '../photo.model';
import { PhotosService } from '../photos.service';
import { LayoutService } from '../../core/layout.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[];
  loading: boolean = false;

  constructor(
    private layout: LayoutService,
    private photosService: PhotosService,
    private user: UserService,
    private snackBar: MatSnackBar
  ) {
    this.layout.title = 'Album';
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.loading = true;
    this.photosService.getPhotos()
      .finally(() => this.loading = false)
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
      },
      (err: Response) => {
        this.snackBar.open('Error getting photos.', null, { duration: 3000, panelClass: 'snackbar-error' });
      });
  }
}
