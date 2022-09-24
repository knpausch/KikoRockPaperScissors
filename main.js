var human = new Player("Human","🎸");
var computer = new Player("Computer","💾");
var myGame = new Game(human, computer);

var classicBttn = document.querySelector("#classicBttn");
var hardcoreBttn = document.querySelector("#hardcoreBttn");
var classicFighters = document.querySelector("#classicFighterSection");

classicBttn.addEventListener('click', loadClassicFigherPage);
classicFighters.addEventListener('click', selectClassicFighter);

console.log(myGame);

function loadClassicFigherPage(){
  classicBttn.className = "classic-section-hide";
  hardcoreBttn.className = "hardcore-section-hide";
  classicFighters.className = "classic-game-section";

  myGame.changeGameMode("classic");
  console.log(myGame);
}

function selectClassicFighter(event){
  if (event.target.classList.contains("rock-image")){
    console.log("ayyy it rock")
  }
  else if (event.target.classList.contains("paper-image")){
    console.log("ayyy it paper")
  }
  else if (event.target.classList.contains("scissors-image")){
    console.log("ayyy it scissors")
  }
}



//SET GAME MODE
// myGame.changeGameMode("classic");
// myGame.changeGameMode("hardcore");

//ROUND 1
// myGame.selectHumanFighter("paper");
// myGame.selectComputerFighter();
// myGame.playClassicMode();
// myGame.playHardcoreMode();

//ROUND 2
// myGame.selectHumanFighter("alien");
// myGame.selectComputerFighter();
// myGame.playClassicMode();
// myGame.playHardcoreMode();

//ROUND 3
// myGame.selectHumanFighter("lizard");
// myGame.selectComputerFighter();
// myGame.playClassicMode();
// myGame.playHardcoreMode();

// console.log(myGame.players[0]);
// console.log(myGame.players[1]);
// console.log(myGame);
