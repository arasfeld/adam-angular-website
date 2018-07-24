export class Artist {
  rank: number;
  name: string;
  imageUrl: string;
  playcount: number;

  constructor(artist: any) {
    this.rank = parseInt(artist['@attr'].rank);
    this.name = artist.name;
    this.imageUrl = artist.image[2]['#text'];
    this.playcount = parseInt(artist.playcount);
  }
}
