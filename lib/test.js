const Faceit = require("./index.js");
const faceit = new Faceit("Api key");

faceit.getPlayerInfo("APEX-Jesus").then(function (player) {
    console.log(player.raw.games.dota2);
    faceit.getPlayerStats(player.id, 'dota2').then(function(stats){
        console.log(stats);
    });
});

