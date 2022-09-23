var human = new Player("Human","🎸");
var computer = new Player("Computer","💾");

var testGame = new Game(human, computer);

testGame.selectGameMode("classic");

testGame.selectHumanFighter("paper");
testGame.selectComputerFighter();
console.log(human);
console.log(computer);
console.log(testGame);

testGame.playClassicMode();
