const request = require('request');
const querystring = require('querystring');

class FaceIt {
  constructor(apiKey) {
    this.apiUrl = "https://open.faceit.com/data/v4/";
    this.apiKey = apiKey;
  }

  getRequest(url, form) {
    let apiUrl = this.apiUrl;
    let apiKey = this.apiKey;
    return new Promise(function (resolve, reject) {
      request(`${apiUrl}${url}?${querystring.stringify(form)}`, {auth: {bearer: apiKey}}, function (error, response, body) {
        resolve(JSON.parse(body));
      });
    });
  }

  async getPlayerInfo(nickname) {
    return new Player(await this.getRequest('players', {nickname: nickname}), this);
  }

  async getPlayerStats(playerId, gameId) {
    return await this.getRequest(`players/${playerId}/stats/${gameId}`, {});
  }
}

module.exports = FaceIt;

class Player {
  constructor(data, pipe) {
    this.faceIt = pipe;
    this.raw = data;

    this.nickname = data.nickname;
    this.id = data.player_id;
    this.avatar = data.avatar;
    this.country = data.country;
    this.steamId = data.steam_id_64;
    this.steamNickname = data.steam_nickname;
    this.faceitUrl = data.faceit_url.replace('{lang}', 'ru');

    this.games = new Games(data.games, this)
  }
}

class Games {
  constructor(data, player) {
    this.player = player;

    if (data.csgo) this.csgo = new CSGO(data.csgo, this);
  }
}

class CSGO {
  constructor(data, games) {
    this.games = games;

    this.gameProfileId = data.game_profile_id;
    this.gamePlayerId = data.game_player_id;
    this.region = data.region;
    this.skillLevelLabel = data.skill_level_label;
    this.skillLevel = data.skill_level;
    this.faceitElo = data.faceit_elo;
    this.gamePlayerName = data.game_player_name;
  }

  async getStats() {
    let csgoStats = new CSGOStats(await this.games.player.faceIt.getPlayerStats(this.games.player.id, 'csgo'), this);
    this.stats = csgoStats;
    return csgoStats;
  }
}

class CSGOStats {
  constructor(data, csgo) {
    this.csgo = csgo;
    this.raw = data;

    this.winRate = data.lifetime['Win Rate %'];
    this.currentWinStreak = data.lifetime['Current Win Streak'];
    this.longestWinStreak = data.lifetime['Longest Win Streak'];
    this.wins = data.lifetime['Wins'];
    this.recentResults = data.lifetime['Recent Results'];
    this.averageHeadshots = data.lifetime['Average Headshots %'];
    this.matches = data.lifetime['Matches'];
    this.totalHeadshots = data.lifetime['Total Headshots %'];
    this.kdratio = data.lifetime['K/D Ratio'];
    this.averageKDratio = data.lifetime['Average K/D Ratio'];
  }
}