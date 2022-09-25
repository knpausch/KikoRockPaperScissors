//NON-PRESSING ITEMS TO IMPROVE:
//TO FIX: fighter images, they shift up when selected
//(use stack flexbox or fixed placement)
//TO FIX: check game on macbook resolution
//TO FIX: image size being dynamic
//TO FIX: fighters show hover mouse when round ended

var human = new Player("Human","🎸");
var computer = new Player("Computer","💾");
var myGame = new Game(human, computer);

var classicBttn = document.querySelector("#classicBttn");
var hardcoreBttn = document.querySelector("#hardcoreBttn");
var userPrompt = document.querySelector("#userPrompt");
var humanScore = document.querySelector("#humanScore");
var computerScore = document.querySelector("#computerScore");
var classicFighters = document.querySelector("#classicFighterSection");
var classicGuitar1 = document.querySelector("#classicGuitar1");
var classicGuitar2 = document.querySelector("#classicGuitar2");
var classicGuitar3 = document.querySelector("#classicGuitar3");
var fighterSelection = document.querySelector("#classicChoice");
var fightScene = document.querySelector("#fightGameSection");
var fighter1 = document.querySelector("#fighter1Image");
var fighter2 = document.querySelector("#fighter2Image");
var changeGameBttn = document.querySelector("#changeGameBttn");

classicBttn.addEventListener('click', loadClassicFigherPage);
classicFighters.addEventListener('click', selectClassicFighter);
changeGameBttn.addEventListener('click', loadLobbyPage);

console.log(myGame);

updateScoreboard();

function loadLobbyPage(){
  fightScene.className = "fight-game-section-hidden";
  classicBttn.className = "classic-section";
  hardcoreBttn.className = "hardcore-section";
  changeGameBttn.className = "change-game-bttn-hidden";
}

function updateScoreboard(){
  humanScore.innerText = "Wins: "+myGame.players[0].score;
  computerScore.innerText = "Wins "+myGame.players[1].score;
}

function loadClassicFigherPage(){
  classicGuitar1.innerText = " ";
  classicGuitar2.innerText = " ";
  classicGuitar3.innerText = " ";

  myGame.humanFighter = "undecided";
  myGame.computerFighter = "undecided";

  fightScene.className = "fight-game-section-hidden";

  classicBttn.className = "classic-section-hide";
  hardcoreBttn.className = "hardcore-section-hide";
  classicFighters.className = "classic-game-section";

  userPrompt.innerText = "Choose your fighter!";

  myGame.changeGameMode("classic");

  console.log(myGame);
}

function loadFightPage(){
  fighterSelection.className = "classic-choice-hidden";
  classicFighters.className = "classic-game-section-hidden";
  fightScene.className = "fight-game-section";
  myGame.selectComputerFighter();
  fighter2.src = `assets/${myGame.computerFighter}.png`;

  var result = myGame.playClassicMode();

  if(result === "draw"){
    userPrompt.innerText = "It's a draw!";
  }
  else if (result === "human"){
    userPrompt.innerText = "Human wins this round!";
  }
  else if (result === "computer"){
    userPrompt.innerText = "Computer wins this round!";
  }
  updateScoreboard();
  changeGameBttn.className = "change-game-bttn";
  console.log(myGame);

  const myTimeout2 = setTimeout(loadClassicFigherPage, 3000);

}

function selectClassicFighter(event){
  if (event.target.classList.contains("rock-image")){
    fighterSelection.className = "classic-choice";
    myGame.selectHumanFighter("rock");
    classicGuitar1.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/rock.png";
    const myTimeout = setTimeout(loadFightPage, 3000);

  }
  else if (event.target.classList.contains("paper-image")){
    fighterSelection.className = "classic-choice";
    myGame.selectHumanFighter("paper");
    classicGuitar2.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/paper.png";
    const myTimeout = setTimeout(loadFightPage, 3000);

  }
  else if (event.target.classList.contains("scissors-image")){
    fighterSelection.className = "classic-choice";
    myGame.selectHumanFighter("scissors");
    classicGuitar3.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/scissors.png";
    const myTimeout = setTimeout(loadFightPage, 3000);
  }
}

//TO DO:
//AJDUST: Show change game button after 1 round
//BUILD: Hardcore game on the dom
