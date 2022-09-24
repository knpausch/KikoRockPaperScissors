//TO FIX: fighter images, they shift up when selected (use stack flexbox or fixed sizes)


var human = new Player("Human","🎸");
var computer = new Player("Computer","💾");
var myGame = new Game(human, computer);

var classicBttn = document.querySelector("#classicBttn");
var hardcoreBttn = document.querySelector("#hardcoreBttn");
var classicFighters = document.querySelector("#classicFighterSection");
var classicGuitar1 = document.querySelector("#classicGuitar1");
var classicGuitar2 = document.querySelector("#classicGuitar2");
var classicGuitar3 = document.querySelector("#classicGuitar3");

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
    myGame.selectHumanFighter("rock");
    classicGuitar1.innerText = "🎸";
    console.log(myGame);
  }
  else if (event.target.classList.contains("paper-image")){
    console.log("paper");
    myGame.selectHumanFighter("paper");
    classicGuitar2.innerText = "🎸";
    console.log(myGame);
  }
  else if (event.target.classList.contains("scissors-image")){
    console.log("scissors");
    myGame.selectHumanFighter("scissors");
    classicGuitar3.innerText = "🎸";
    console.log(myGame);
  }
}

//SET GAME MODE
// myGame.changeGameMode("hardcore");

//ROUND 1 - CLASSIC
// myGame.selectComputerFighter();
// myGame.playClassicMode();
// myGame.playHardcoreMode();

//ROUND 1 - HARDCORE
// myGame.selectHumanFighter("paper");
// myGame.selectComputerFighter();
// myGame.playClassicMode();
// myGame.playHardcoreMode();

//SHOW SCORE
