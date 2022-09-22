class Game{
  constructor(player1, player2){
    this.players = [player1, player2];
    this.gameMode = "undecided";
    this.humanFighter = "undecided";
    this.computerFighter = "undecided";
  }

  selectGameMode(){
    if(this.gameMode === "classic"){
      playClassicMode();
    }
    else if(this.gameMode === "hardcore")
    {
      playHardcoreMode();
    }
  }

  selectFighter(fighter){
    this.humanFighter = fighter;
  }

  playClassicMode(){


  }

  playHardcoreMode(){
    //code
  }




}//end of class
