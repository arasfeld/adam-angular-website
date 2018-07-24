export class Album {
  rank: number;
  name: string;
  artist: string;
  imageUrl: string;
  playcount: number;

  constructor(album: any) {
    this.rank = parseInt(album['@attr'].rank, 10);
    this.name = album.name;
    this.artist = album.artist.name;
    this.imageUrl = album.image[2]['#text'];
    this.playcount = parseInt(album.playcount, 10);
  }
}
