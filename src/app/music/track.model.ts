export class Track {
  name: string;
  artist: string;
  album: string;
  imageUrl: string;
  date?: Date;

  constructor(track: any) {
    this.name = track.name;
    this.artist = track.artist['#text'];
    this.album = track.album['#text'];
    this.imageUrl = track.image[2]['#text'];
    this.date = track.date ? new Date(track.date['#text']) : null;
  }
}
