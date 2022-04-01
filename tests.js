//Selected elements

// const playButton = document.querySelector(".play");
// const results = document.querySelector(".results");
// let resultsOfGame = document.createElement("h2");
// throw new Error("oops");
class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  getHand() {
    return this.hand;
  }

  wonGame() {
    this.points++;
  }

  resetPoints() {
    this.points = 0;
  }
}

class gameVisuals {
  constructor(game) {
    this.game = game;
  }
}

class Game {
  playButton = document.querySelector(".play");
  results = document.querySelector(".results");
  resultsOfGame = document.createElement("h2");
  numOfRounds;

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.playButton.addEventListener("click", (e) => {
      game.playRound();
    });
  }

  playRound() {
    let player1Hand = document.querySelector(".player-one-hand").value;
    let player2Hand = document.querySelector(".player-two-hand").value;
    (function () {
      this.results.innerHTML = "";
      this.resultsOfGame = `<h2>${this.player1.name} chose ${player1Hand} and ${this.player2.name} chose ${player2Hand}</h2>`;
      this.results.innerHTML = this.resultsOfGame;
      if (
        (player1Hand === "rock" && player2Hand === "scissors") ||
        (player1Hand === "paper" && player2Hand === "rock") ||
        (player1Hand === "scissors" && player2Hand === "paper")
      ) {
        this.results.insertAdjacentHTML(
          "beforeend",
          `<h3>${this.player1.name} won the hand!</h3>`
        );
        this.player1.wonGame();
      } else if (player1Hand === player2Hand) {
        console.log(`It's a tie!`);
      } else {
        this.results.insertAdjacentHTML(
          "beforeend",
          `<h3>${this.player2.name} won the hand!</h3>`
        );
        this.player2.wonGame();
      }
    }.bind(game)());
    this.declareWinner.call(game);
    console.log(
      `${this.player1.name} chose ${player1Hand} and ${this.player2.name} chose ${player2Hand}`
    );
  }

  declareWinner() {
    this.numOfRounds = document.querySelector(".rounds").value;
    if (this.player1.points === Number(this.numOfRounds)) {
      this.results.innerHTML = `<h3>${this.player1.name} won the game!</h3>`;
      this.player1.resetPoints();
      this.player2.resetPoints();
    }
    if (this.player2.points === Number(this.numOfRounds)) {
      this.results.innerHTML = `<h3>${this.player2.name} won the game!</h3>`;
      this.player1.resetPoints();
      this.player2.resetPoints();
    }
  }
}

const game = new Game(new Player("John"), new Player("Kalynn"));

// playButton.addEventListener("click", (e) => {
//   game.playRound();
// });
// console.log(getHand(hands));

// playRound(player1, player2);
// playGame(player1, player2, 5);

// const playTournament = function (
//   player1,
//   player2,
//   player3,
//   player4,
//   playUntil
// ) {
//   const winner1 = playGame(player1, player2, playUntil);
//   const winner2 = playGame(player3, player4, playUntil);

//   const playTournament = playGame(winner1, winner2, playUntil);
//   console.log(`${playTournament.name} is the world champion!`);
// };

// playTournament(player1, player2, player3, player4, 3);
