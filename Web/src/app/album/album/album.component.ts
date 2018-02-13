import { Component } from '@angular/core';

import { AlbumService } from '../album.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  constructor(
    private albumService: AlbumService,
    private user: UserService
  ) {}
}
