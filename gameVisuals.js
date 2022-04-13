class GameVisuals {
  choiceSelector = document.querySelectorAll(".choices");
  player1Name = document.querySelector(".player-1-name");
  player2Name = document.querySelector(".player-2-name");
  constructor(game) {
    this.game = game;
    this.choiceSelector.forEach((el) => {
      el.addEventListener("change", (e) => {
        this.changeImage(e);
        // console.log(e.target);
      });
    });
    // this.displayScore();
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

module.exports = GameVisuals;
