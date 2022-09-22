var human = new Player("human","🎸");
var computer = new Player("computer","💾");

var testGame = new Game(human, computer);

console.log(human);
console.log(computer);
console.log(testGame);

testGame.selectFighter("rock");

console.log(testGame);
