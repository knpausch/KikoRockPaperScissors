var human = new Player("Human","🎸");
var computer = new Player("Computer","💾");
var myGame = new Game(human, computer);

//SET GAME MODE
// myGame.changeGameMode("classic");
myGame.changeGameMode("hardcore");

//ROUND 1
myGame.selectHumanFighter("paper");
myGame.selectComputerFighter();
// myGame.playClassicMode();
myGame.playHardcoreMode();

//ROUND 2
myGame.selectHumanFighter("alien");
myGame.selectComputerFighter();
// myGame.playClassicMode();
myGame.playHardcoreMode();

//ROUND 3
myGame.selectHumanFighter("lizard");
myGame.selectComputerFighter();
// myGame.playClassicMode();
myGame.playHardcoreMode();

console.log(myGame.players[0]);
console.log(myGame.players[1]);
console.log(myGame);
