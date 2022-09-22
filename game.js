// var human = new Player("human", "🎸");
// var computer = new Player("computer", "💾");
//
class Game{
  constructor(human, computer){
    this.gameMode = null;
    this.humanScore = human.wins;
    this.computerScore = computer.wins;
    this.winner = null;
  }
}

var gameTest = new Game(human, computer);

console.log(gameTest);
