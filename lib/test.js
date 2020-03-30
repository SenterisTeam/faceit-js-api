const Faceit = require("./index.js");
const faceit = new Faceit("Api Key");

faceit.getPlayerInfo("dima-as").then(function (player) {
    console.log(player.raw.games.wot_RU);
    faceit.getPlayerStats(player.id, 'wot_RU').then(function(stats){
        console.log(stats);
    });
});

