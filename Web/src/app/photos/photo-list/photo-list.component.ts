import { Component } from '@angular/core';

import { PhotosService } from '../photos.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {
  constructor(
    private photoService: PhotosService,
    private user: UserService
  ) {}
}
