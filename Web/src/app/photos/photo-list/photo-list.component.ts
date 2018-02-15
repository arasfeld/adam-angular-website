import { Component } from '@angular/core';

import { PhotosService } from '../photos.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {
  loading: boolean = false;

  constructor(
    private photoService: PhotosService,
    private user: UserService
  ) {}
}
