export class Game {
  appId: number;
  name: string;
  recentPlaytime: number;
  totalPlaytime: number;
  iconUrl: string;
  logoUrl: string;

  constructor(game: any) {
    this.appId = game.appid;
    this.name = game.name;
    this.recentPlaytime = game.playtime_2weeks;
    this.totalPlaytime = game.playtime_forever;
    this.iconUrl = `http://media.steampowered.com/steamcommunity/public/images/apps/${
      game.appid
    }/${game.img_icon_url}.jpg`;
    this.logoUrl = `http://media.steampowered.com/steamcommunity/public/images/apps/${
      game.appid
    }/${game.img_logo_url}.jpg`;
  }
}
