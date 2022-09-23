var human = new Player("Human","🎸");
var computer = new Player("Computer","💾");

var testGame = new Game(human, computer);

testGame.selectGameMode("hardcore");

testGame.selectHumanFighter("scissors");
testGame.selectComputerFighter("paper");
console.log(human);
console.log(computer);
console.log(testGame);

// testGame.playClassicMode();
testGame.playHardcoreMode();
