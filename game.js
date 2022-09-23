class Game{
  constructor(player1, player2){
    this.players = [player1, player2];
    this.gameMode = "undecided";
    this.humanFighter = "undecided";
    this.computerFighter = "undecided";
  }

  selectGameMode(gameMode){
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

  selectComputerFighter(fighter){
    this.computerFighter = fighter;
  }

  // selectComputerFighter(){
  //   var classicFighterList = ["rock", "paper", "scissors"];
  //   var randomNum = Math.floor(Math.random() * classicFighterList.length);
  //   this.computerFighter = classicFighterList[randomNum];
  // }

  playClassicMode(){
    if(this.humanFighter === this.computerFighter){
      console.log(`A draw between ${this.humanFighter} and ${this.computerFighter}!`);
    }
    else if(this.humanFighter === "rock" && this.computerFighter === "scissors"){
      console.log(`${this.players[0].name} wins ${this.humanFighter} beats ${this.computerFighter}!`);
    }
    else if(this.humanFighter === "scissors" && this.computerFighter === "rock"){
      console.log(`${this.players[1].name} wins ${this.computerFighter} beats ${this.humanFighter}!`);
    }
    else if(this.humanFighter === "paper" && this.computerFighter === "rock"){
      console.log(`${this.players[0].name} wins ${this.humanFighter} beats ${this.computerFighter}!`);
    }
    else if(this.humanFighter === "rock" && this.computerFighter === "paper"){
      console.log(`${this.players[1].name} wins ${this.computerFighter} beats ${this.humanFighter}!`);
    }
    else if(this.humanFighter === "scissors" && this.computerFighter === "paper"){
      console.log(`${this.players[0].name} wins ${this.humanFighter} beats ${this.computerFighter}!`);
    }
    else if(this.humanFighter === "paper" && this.computerFighter === "scissors"){
      console.log(`${this.players[1].name} wins ${this.computerFighter} beats ${this.humanFighter}!`);
    }
  }

  playHardcoreMode(){
    if(this.humanFighter === this.computerFighter){
      console.log(`A draw between ${this.humanFighter} and ${this.computerFighter}!`);
    }
    else if(this.humanFighter === "rock" && this.computerFighter === "scissors" || this.computerFighter === "lizard"){
      console.log(`${this.players[0].name} wins ${this.humanFighter} beats ${this.computerFighter}!`);
    }
    else if(this.humanFighter === "scissors" || this.humanFighter === "lizard" && this.computerFighter === "rock"){
      console.log(`${this.players[1].name} wins ${this.computerFighter} beats ${this.humanFighter}!`);
    }
    else if(this.humanFighter === "paper" && this.computerFighter === "rock" || this.computerFighter === "alien"){
      console.log(`${this.players[0].name} wins ${this.humanFighter} beats ${this.computerFighter}!`);
    }
    else if(this.humanFighter === "rock" || this.humanFighter === "alien" && this.computerFighter === "paper"){
      console.log(`${this.players[1].name} wins ${this.computerFighter} beats ${this.humanFighter}!`);
    }
    //broken
    // else if(this.humanFighter === "scissors" && this.computerFighter === "paper" || this.computerFighter === "lizard"){
    //   console.log(`${this.players[0].name} wins ${this.humanFighter} beats ${this.computerFighter}!`);
    // }


  }




}//end of class
