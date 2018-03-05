import { Image } from '../shared/models/image.model';

export class Photo {
  photoId: number;
  title: string;
  caption: string;
  timestamp: Date;

  image: Image;

  constructor() {}
}