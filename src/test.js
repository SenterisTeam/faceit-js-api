const FaceIt = require("./index");

const faceIt = new FaceIt("API KEY");

faceIt.getPlayerInfo("Api").then(function (player) {
    console.log(player);
    player.games.csgo.getStats().then(function (stats) {
        console.log(stats);
    });
});

