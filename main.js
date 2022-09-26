//NON-PRESSING ITEMS TO IMPROVE:
//TO FIX: fighter images, they shift up when selected
//(use stack flexbox or fixed placement)
//TO FIX: check game on macbook resolution, image size being dynamic
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
var classicChoice = document.querySelector("#classicChoice");
var fightScene = document.querySelector("#fightGameSection");
var fighter1 = document.querySelector("#fighter1Image");
var fighter2 = document.querySelector("#fighter2Image");
var changeGameBttn = document.querySelector("#changeGameBttn");

var hardcoreFighters = document.querySelector("#hardcoreFighterSection");
var hardcoreGuitar1 = document.querySelector("#hardcoreGuitar1");
var hardcoreGuitar2 = document.querySelector("#hardcoreGuitar2");
var hardcoreGuitar3 = document.querySelector("#hardcoreGuitar3");
var hardcoreGuitar4 = document.querySelector("#hardcoreGuitar4");
var hardcoreGuitar5 = document.querySelector("#hardcoreGuitar5");
var fightScene = document.querySelector("#fightGameSection");
var hardcoreChoice = document.querySelector("#hardcoreChoice");

var finishedFirstRound = false;

classicBttn.addEventListener('click', loadClassicFighterPage);
classicFighters.addEventListener('click', selectClassicFighter);
changeGameBttn.addEventListener('click', loadLobbyPage);

hardcoreBttn.addEventListener('click', loadHardcoreFighterPage);
hardcoreFighters.addEventListener('click', selectHardcoreFighter);

console.log(myGame);

updateScoreboard();

//WIP
function loadHardcoreFighterPage(){
  if(finishedFirstRound){
    changeGameBttn.className = "change-game-bttn";
  }

  hardcoreGuitar1.innerText = " ";
  hardcoreGuitar2.innerText = " ";
  hardcoreGuitar3.innerText = " ";
  hardcoreGuitar4.innerText = " ";
  hardcoreGuitar5.innerText = " ";

  myGame.humanFighter = "undecided";
  myGame.computerFighter = "undecided";

  fightScene.className = "fight-game-section-hidden";

  classicBttn.className = "classic-section-hide";
  hardcoreBttn.className = "hardcore-section-hide";
  classicFighters.className = "classic-game-section-hidden";
  hardcoreFighters.className = "hardcore-game-section";

  userPrompt.innerText = "Choose your fighter!";

  myGame.changeGameMode("hardcore");

  console.log(myGame);
}

function loadLobbyPage(){
  fightScene.className = "fight-game-section-hidden";
  classicBttn.className = "classic-section";
  hardcoreBttn.className = "hardcore-section";
  changeGameBttn.className = "change-game-bttn-hidden";
  classicFighters.className = "classic-game-section-hidden";
  hardcoreFighterSection.className = "hardcore-game-section-hidden";
  finishedFirstRound = false;
}

function updateScoreboard(){
  humanScore.innerText = "Wins: "+myGame.players[0].score;
  computerScore.innerText = "Wins "+myGame.players[1].score;
}

function loadClassicFighterPage(){
  if(finishedFirstRound){
    changeGameBttn.className = "change-game-bttn";
  }

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
  classicChoice.className = "classic-choice-hidden";
  classicFighters.className = "classic-game-section-hidden";
  hardcoreFighterSection.className = "hardcore-game-section-hidden";
  hardcoreChoice.className = "hardcore-choice-hidden";
  fightScene.className = "fight-game-section";
  myGame.selectComputerFighter();
  fighter2.src = `assets/${myGame.computerFighter}.png`;

  if(myGame.gameMode === "classic"){
    var result = myGame.playClassicMode();
  }
  else if(myGame.gameMode === "hardcore"){
    var result = myGame.playHardcoreMode();
  }

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

  console.log(myGame);

  finishedFirstRound = true;
  if(myGame.gameMode === "classic"){
    const myTimeout2 = setTimeout(loadClassicFighterPage, 3000);
  }
  else if(myGame.gameMode === "hardcore"){
    const myTimeout2 = setTimeout(loadHardcoreFighterPage, 3000);
  }
}

function selectHardcoreFighter(event){
  if (event.target.classList.contains("rock-image")){
    console.log("rock");

    hardcoreChoice.className = "hardcore-choice";
    myGame.selectHumanFighter("rock");
    hardcoreGuitar1.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/rock.png";
    const myTimeout = setTimeout(loadFightPage, 3000);
  }
  else if (event.target.classList.contains("paper-image")){
    hardcoreChoice.className = "hardcore-choice";
    myGame.selectHumanFighter("paper");
    hardcoreGuitar2.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/paper.png";
    const myTimeout = setTimeout(loadFightPage, 3000);
  }
  else if (event.target.classList.contains("scissors-image")){
    hardcoreChoice.className = "hardcore-choice";
    myGame.selectHumanFighter("scissors");
    hardcoreGuitar3.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/scissors.png";
    const myTimeout = setTimeout(loadFightPage, 3000);
  }
  else if (event.target.classList.contains("lizard-image")){
    hardcoreChoice.className = "hardcore-choice";
    myGame.selectHumanFighter("lizard");
    hardcoreGuitar4.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/lizard.png";
    const myTimeout = setTimeout(loadFightPage, 3000);
  }
  else if (event.target.classList.contains("alien-image")){
    hardcoreChoice.className = "hardcore-choice";
    myGame.selectHumanFighter("alien");
    hardcoreGuitar5.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/alien.png";
    const myTimeout = setTimeout(loadFightPage, 3000);
  }
}

function selectClassicFighter(event){
  if (event.target.classList.contains("rock-image")){
    classicChoice.className = "classic-choice";
    myGame.selectHumanFighter("rock");
    classicGuitar1.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/rock.png";
    const myTimeout = setTimeout(loadFightPage, 3000);

  }
  else if (event.target.classList.contains("paper-image")){
    classicChoice.className = "classic-choice";
    myGame.selectHumanFighter("paper");
    classicGuitar2.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/paper.png";
    const myTimeout = setTimeout(loadFightPage, 3000);

  }
  else if (event.target.classList.contains("scissors-image")){
    classicChoice.className = "classic-choice";
    myGame.selectHumanFighter("scissors");
    classicGuitar3.innerText = "🎸";
    console.log(myGame);
    fighter1.src = "assets/scissors.png";
    const myTimeout = setTimeout(loadFightPage, 3000);
  }
}

//TO DO:
//BUILD: Hardcore game on the dom
