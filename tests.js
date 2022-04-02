//Selected elements

// const playButton = document.querySelector(".play");
// const results = document.querySelector(".results");
// let resultsOfGame = document.createElement("h2");
// throw new Error("oops");
// const p1Name = prompt("Player 1 name");
// const p2Name = prompt("Player 2 name");
let player1Name;
let player2Name;

class gameVisuals {
  choiceSelector = document.querySelectorAll(".choices");
  player1Name = document.querySelector(".player-1-name");
  player2Name = document.querySelector(".player-2-name");
  constructor(game) {
    this.game = game;
    this.playerArr = [this.player1Name, player2Name];
    this.choiceSelector.forEach(el => {
      el.addEventListener("change", e => {
        this.changeImage(e);
        // console.log(e.target);
      });
    });
    this.displayScore();
  }

  changeImage(e) {
    let player = e.target.previousSibling.previousSibling;
    if (e.target.value === "rock") {
      player.src =
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5NjIyODM0ODM2ODc0Mzc3/dwayne-the-rock-johnson-gettyimages-1061959920.jpg";
    }
    if (e.target.value === "scissors") {
      player.src = "https://i.insider.com/5fc12c8850e71a0011557ae9?width=700";
    }
    if (e.target.value === "paper") {
      player.src =
        "https://ca-times.brightspotcdn.com/dims4/default/51bf23e/2147483647/strip/true/crop/750x394+0+14/resize/1200x630!/quality/90/?url=https%3A%2F%2Fwww.trbimg.com%2Fimg-5436b8c6%2Fturbine%2Fzap-the-office-michaels-worst-moments-pics-012";
    }
  }

  //display score

  displayScore() {
    let replacer = document.createElement("h2");
    replacer.innerText = `${this.game.player1.name}`;
    this.player1Name.replaceWith(replacer);
    replacer = document.createElement("h2");
    replacer.innerText = `${this.game.player2.name}`;
    this.player2Name.replaceWith(replacer);
  }

  // addPlayerNames() {
  //   console.log(this.player1Name);
  //   this.player1Name.textContent = `<h2>${this.game.player1.name}</h2>`;
  //   this.player2Name.textContent = `<h2>${this.game.player2.name}</h2>`;
  // }
}

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

class Game {
  playButton = document.querySelector(".play");
  results = document.querySelector(".results");
  resultsOfGame = document.createElement("h2");
  numOfRounds;

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.playButton.addEventListener("click", e => {
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
        this.player1.wonGame();
        this.results.insertAdjacentHTML(
          "beforeend",
          `<h3>${this.player1.name} won the hand!\n Current score is ${this.player1.points} vs ${this.player2.points}</h3>`
        );
      } else if (player1Hand === player2Hand) {
        this.results.insertAdjacentHTML(
          "beforeend",
          `<h3>It's a tie!\n Current score is ${this.player1.points} vs ${this.player2.points}</h3>`
        );
        return;
      } else {
        this.player1.wonGame();
        this.results.insertAdjacentHTML(
          "beforeend",
          `<h3>${this.player2.name} won the hand!\n Current score is ${this.player1.points} vs ${this.player2.points}</h3>`
        );
      }
      this.declareWinner.call(game);
    }.bind(game)());
    console.log(
      `${this.player1.name} chose ${player1Hand} and ${this.player2.name} chose ${player2Hand}`
    );
  }

  declareWinner() {
    this.numOfRounds = document.querySelector(".rounds").value;
    if (this.numOfRounds !== "") {
      if (this.player1.points === Number(this.numOfRounds)) {
        this.results.innerHTML = `<h3>${this.player1.name} won the game!\n Final score is ${this.player1.points} vs ${this.player2.points}</h3>`;
        this.player1.resetPoints();
        this.player2.resetPoints();
      }
      if (this.player2.points === Number(this.numOfRounds)) {
        this.results.innerHTML = `<h3>${this.player2.name} won the game!\n Final score is ${this.player1.points} vs ${this.player2.points}</h3>`;
        this.player1.resetPoints();
        this.player2.resetPoints();
      }
    }
  }
}

const game = new Game(new Player("Bill"), new Player("Bob"));
const gameUI = new gameVisuals(game);

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
