class Player{
  constructor(name, token, wins){
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  takeTurn(){
    //when player takes turn
  }
}

var human = new Player("human", "🎸");
var computer = new Player("computer", "💾");

console.log(human);
