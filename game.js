class Game{
  constructor(player1, player2){
    this.players = [player1, player2];
    this.gameMode = "undecided";
    this.humanFighter = "undecided";
    this.computerFighter = "undecided";
  }

  changeGameMode(gameMode){
    if(gameMode === "classic"){
      this.gameMode = "classic";
    }
    else if(gameMode === "hardcore")
    {
      this.gameMode = "hardcore";
    }
  }

  selectHumanFighter(fighter){
    this.humanFighter = fighter;
  }

  selectComputerFighter(){
    if (this.gameMode === "classic"){
      var classicFighterList = ["rock", "paper", "scissors"];
      var randomNum = Math.floor(Math.random() * classicFighterList.length);
      this.computerFighter = classicFighterList[randomNum];
    }
    else if (this.gameMode === "hardcore"){
      var hardcoreFighterList = ["rock", "paper", "scissors", "moshpit", "sickSolo"];
      var randomNum = Math.floor(Math.random() * hardcoreFighterList.length);
      this.computerFighter = hardcoreFighterList[randomNum];
    }
  }

  playClassicMode(){
    var result;
    if(this.humanFighter === this.computerFighter){
      result = "draw";
    }
    else if(this.humanFighter === "rock" && this.computerFighter === "scissors"){
      this.players[0].updateScore();
      result = "human";
    }
    else if(this.humanFighter === "scissors" && this.computerFighter === "rock"){
      this.players[1].updateScore();
      result = "computer";
    }
    else if(this.humanFighter === "paper" && this.computerFighter === "rock"){
      this.players[0].updateScore();
      result = "human";
    }
    else if(this.humanFighter === "rock" && this.computerFighter === "paper"){
      this.players[1].updateScore();
      result = "computer";
    }
    else if(this.humanFighter === "scissors" && this.computerFighter === "paper"){
      this.players[0].updateScore();
      result = "human";
    }
    else if(this.humanFighter === "paper" && this.computerFighter === "scissors"){
      this.players[1].updateScore();
      result = "computer";
    }
    return result;
  }

  playHardcoreMode(){
    var result;
    if(this.humanFighter === this.computerFighter){
      result = "draw";
    }
    else if(this.humanFighter === "rock" && (this.computerFighter === "scissors" || this.computerFighter === "moshpit")){
      this.players[0].updateScore();
      result = "human";
    }
    else if((this.humanFighter === "scissors" || this.humanFighter === "moshpit") && this.computerFighter === "rock"){
      this.players[1].updateScore();
      result = "computer";
    }
    else if(this.humanFighter === "paper" && (this.computerFighter === "rock" || this.computerFighter === "sickSolo")){
      this.players[0].updateScore();
      result = "human";
    }
    else if((this.humanFighter === "rock" || this.humanFighter === "sickSolo") && this.computerFighter === "paper"){
      this.players[1].updateScore();
      result = "computer";
    }
    else if(this.humanFighter === "scissors" && (this.computerFighter === "paper" || this.computerFighter === "moshpit")){
      this.players[0].updateScore();
      result = "human";
    }
    else if((this.humanFighter === "paper" || this.humanFighter === "moshpit") && this.computerFighter === "scissors"){
      this.players[1].updateScore();
      result = "computer";
    }
    else if(this.humanFighter === "moshpit" && (this.computerFighter === "paper" || this.computerFighter === "sickSolo")){
      this.players[0].updateScore();
      result = "human";
    }
    else if((this.humanFighter === "paper" || this.humanFighter === "sickSolo") && this.computerFighter === "moshpit"){
      this.players[1].updateScore();
      result = "computer";
    }
    else if(this.humanFighter === "sickSolo" && (this.computerFighter === "scissors" || this.computerFighter === "rock")){
      this.players[0].updateScore();
      result = "human";
    }
    else if((this.humanFighter === "scissors" || this.humanFighter === "rock") && this.computerFighter === "sickSolo"){
      this.players[1].updateScore();
      result = "computer";
    }
    return result;
  }
}
