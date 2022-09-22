class Game{
  constructor(player1, player2){
    this.players = [player1, player2];
    this.gameMode = "undecided";
    this.humanScore = player1.score;
    this.computerScore = player2.score;
    this.winner = "undecided";
    this.humanFighter = player1.fighter;
    this.computerFighter = player2.fighter;
  }
}
