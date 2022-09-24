var human = new Player("Human","🎸");
var computer = new Player("Computer","💾");
var myGame = new Game(human, computer);

var classicBttn = document.querySelector("#classicBttn");
var hardcoreBttn = document.querySelector("#hardcoreBttn");
var classicFighters = document.querySelector("#classicFighterSection");

classicBttn.addEventListener('click', loadClassicFigherPage);

function loadClassicFigherPage(){
  classicBttn.className = "classic-section-hide";
  hardcoreBttn.className = "hardcore-section-hide";
  classicFighters.className = "classic-game-section";

}

//SET GAME MODE
myGame.changeGameMode("classic");
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
