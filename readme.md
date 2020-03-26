# FaceIT JS API
JS API for FaceIt
## Install
`npm install faceit-js-api`
## Documentation
### Setup
```
const FaceIt = require("faceit-js-api");
const faceIt = new FaceIt("API KEY");
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
| faceIt        | FaceIT | Link to main class          |
| nickname      | string |                             |
| id            | string |                             |
| avatar        | string | Url to avatar               |
| steamId       | string |                             |
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
| gameProfileId   | string |             |
| gamePlayerId    | string |             |
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
| kdratio          | string   |             |
| averageKDratio   | string   |             |