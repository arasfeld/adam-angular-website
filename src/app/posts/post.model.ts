import { Image } from '../shared/models/image.model';

export class Post {
  postId: number;
  title: string;
  body: string;
  timestamp: Date;

  image?: Image;

  constructor() {}
}