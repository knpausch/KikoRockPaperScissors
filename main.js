var human = new Player("Human","🎸");
var computer = new Player("Computer","💾");

var testGame = new Game(human, computer);

testGame.changeGameMode("hardcore");

testGame.selectHumanFighter("rock");
testGame.selectComputerFighterTester("scissors");
// testGame.selectComputerFighter();

console.log(human);
console.log(computer);
console.log(testGame);

if (testGame.gameMode === "classic"){
  testGame.playClassicMode();
}
else if(testGame.gameMode === "hardcore"){
  testGame.playHardcoreMode();
}

// testGame.playClassicMode();
// testGame.playHardcoreMode();
