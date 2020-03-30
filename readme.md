# FaceIT JS API
JS API for FaceIt (OAT)
## Install
`npm install faceit-js-api`
## Documentation
### Setup
```
const Faceit = require("faceit-js-api");
const faceit = new Faceit("API KEY");
```
To test performance:
```
faceIt.getPlayerInfo("Player name").then(function (player) {
    console.log(player);
});
```
### Classes
#### FaceIt
Main class for performing requests
###### Methods  
| Method        | Params           | Return |
|---------------|------------------|--------|
| getPlayerInfo | nickname: string | Player |
#### Player
###### Vars
| Var           | Type   | description                 |
|---------------|--------|-----------------------------|
| faceit        | FaceIT | Link to main class          |
| nickname      | string |                             |
| id            | string |                             |
| avatar        | string | Url to avatar               |
| steamID       | string |                             |
| steamNickname | string |                             |
| faceitUrl     | string | Url to faceit profile       |
| raw           | object | All data getted from feceit |
| games         | Games  | Class with games            |
#### Games
###### Vars
| Var    | Type   | description                        |
|--------|--------|------------------------------------|
| player | Player |                                    |
| csgo   | CSGO   | Undefined if player dont play csgo |
#### CSGO
###### Vars
| Var             | Type   | description |
|-----------------|--------|-------------|
| games           | Games  |             |
| gameProfileID   | string |             |
| gamePlayerID    | string |             |
| region          | string |             |
| skillLevelLabel | string |             |
| skillLevel      | int    |             |
| faceitElo       | int    |             |
| gamePlayerName  | string |             |
###### Methods  
| Method        | Params           | Return    |
|---------------|------------------|-----------|
| getStats      |                  | CSGOStats |
#### CSGOStats
###### Vars
| Var              | Type     | description |
|------------------|----------|-------------|
| csgo             | CSGO     |             |
| raw              | object   |             |
| winRate          | string   |             |
| currentWinStreak | string   |             |
| longestWinStreak | string   |             |
| wins             | string   |             |
| recentResults    | string[] |             |
| averageHeadshots | string   |             |
| matches          | string   |             |
| totalHeadshots   | string   |             |
| kdRatio          | string   |             |
| averageKDRatio   | string   |             |